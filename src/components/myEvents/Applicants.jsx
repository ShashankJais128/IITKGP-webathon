import React, { useEffect, useState, useContext } from "react";
import rect from "../../public/Rect.png";
import linkd from "../../public/linkedin.png";
import axios from "axios";
import pp from "../../public/posted_by.png";
import { useParams } from "react-router-dom";
import AuthContext from "../../store/auth-context";
const skill = ["MongoDB", "React"];
function Applicants() {
  const authCtx = useContext(AuthContext);
  let { id } = useParams();

  const [loading, setLoading] = useState();
  const [allapp, setAllApps] = useState([]);

  const [currentapp, setCurrentApp] = useState(null);

  function onvalChange(e) {
    const value = e.target.value;
    setCurrentApp(allapp[value]);
  }
  async function getapp() {
    try {
      const resp = await axios.post(
        "api/dashborads/AllReq",
        { id: id },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      const data = resp.data;
      console.log(data);
      if (resp.status === 202) {
        setAllApps(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function Accept(uid) {
    try {
      const resp = await axios.post(
        "api/request/AcceptReq",
        { competitionID: id, userID: uid },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      const data = resp.data;
      console.log(data);
      if (data === "Data Changed") {
        alert("done");
      }
    } catch (err) {
      console.log(err);
    }
  }
  async function Reject(uid) {
    try {
      const resp = await axios.post(
        "api/request/RemoveReq",
        { competitionID: id, userID: uid },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      const data = resp.data;
      console.log(data);
      if (data === "Data Saved") {
        alert("done");
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getapp();
  }, []);

  useEffect(() => {}, [currentapp]);

  return (
    <div className="w-[75%] mx-[5%] mt-16">
      <img src={rect} alt="" />
      {!loading && allapp && (
        <div className=" bg-[#28282B] p-6">
          <div className="flex flex-col items-center md:flex-row md:justify-between mb-5">
            <div>
              {!loading && (
                <select
                  name=""
                  id=""
                  className="p-2 bg-gray-400 text-white text-xl md:text-2xl font-semibold"
                  onChange={onvalChange}
                >
                  {!loading && allapp && (
                    <>
                      <option value="">Select</option>{" "}
                      {allapp.map((v, i) => {
                        return <option value={i}>{v.userID.name}</option>;
                      })}
                    </>
                  )}
                </select>
              )}
            </div>

            {currentapp != null && (
              <div className="flex space-x-6">
                <button
                  onClick={() => {
                    Accept(currentapp.userID._id);
                  }}
                  className="text-xl text-[#ff673a] font-semibold"
                >
                  Accept
                </button>
                <button
                  onClick={() => {
                    Reject(currentapp.userID._id);
                  }}
                  className="text-xl text-white font-semibold"
                >
                  Reject
                </button>
              </div>
            )}
          </div>
          <br />
          {currentapp != null && (
            <div className="flex justify-center md:justify-start">
              <img src={pp} alt="" className="w-6 md:w-8 mr-4" />
              <h1 className="text-xl sm:text-2xl md:text-3xl text-[#ff673a] font-bold">
                {currentapp.userID.name}
              </h1>{" "}
              &nbsp; &nbsp;
              <a href="https://www.linkedin.com" className="w-6 md:w-8">
                <img src={linkd} alt="" />
              </a>
            </div>
          )}
          {currentapp == null && (
            <center>Please select applicants from above</center>
          )}
          <br />
          <br />
          {currentapp != null && (
            <div className="flex p-2">
              <div className="w-[50%]">
                <h1 className="text-gray-300 text-lg md:text-xl">SKILLS</h1>
                <br />

                <div className="flex flex-wrap gap-2">
                  {currentapp && (
                    <>
                      {currentapp.userID.skills.map((data) => {
                        return (
                          <p className="p-2 bg-gray-400 w-fit text-white rounded-full">
                            {data}
                          </p>
                        );
                      })}
                    </>
                  )}
                </div>
              </div>
              <div className="w-[50%]">
                <h1 className="text-gray-300 text-lg md:text-xl">MESSAGE</h1>
                <br />
                <p className="text-white text-lg">{currentapp.message}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Applicants;
