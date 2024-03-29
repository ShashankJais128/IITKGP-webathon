import React, { useEffect, useContext, useState } from "react";
import { useParams } from "react-router-dom";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

// img
import linkd from "../../public/linkedin.png";
import pp from "../../public/posted_by.png";

function Applicants() {
  const [showUserInfo, setUserInfo] = useState([]);
  const [showImg, setImg] = useState();
  const [showSelect, setSelect] = useState("");

  let { id } = useParams();

  const authCtx = useContext(AuthContext);

  const getCompetion = async () => {
    try {
      var comData = {
        competitionID: id,
      };

      const resp = await axios.post(`/api/request/AllReqofCom`, comData, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (resp.data) {
        console.log(resp.data.comData);

        setUserInfo(resp.data.comData);
        setImg(resp.data.comData[0].competitionID.image);
        setSelect(resp.data.comData[0].userID.name);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getCompetion();
  }, []);

  const selectVal = async (e) => {
    setSelect(e.target.value);
  };

  const Accept = async (event, param) => {
    console.log("Accept");

    const dataSend = {
      competitionID: param.competitionID._id,
      userID: param.userID._id,
    };

    const resp = await axios.post(`/api/request/AcceptReq`, dataSend, {
      headers: { Authorization: `${authCtx.token}` },
    });

    console.log(resp);

    getCompetion();

    console.log(dataSend);
  };

  const Reject = async (event, param) => {
    console.log("Reject");

    const dataSend = {
      competitionID: param.competitionID._id,
      userID: param.userID._id,
    };

    const resp = await axios.post(`/api/request/Reject`, dataSend, {
      headers: { Authorization: `${authCtx.token}` },
    });

    console.log(resp);

    getCompetion();

    console.log(dataSend);
  };

  return (
    <>
      {showUserInfo.length > 0 ? (
        <div className="w-[75%] mx-[5%] mt-16">
          <img src={showImg} alt="" className="w-full" />
          <div className=" bg-[#28282B] p-6">
            <div className="flex flex-col items-center md:flex-row md:justify-between mb-5">
              <div>
                <select
                  name="userName"
                  id=""
                  className="p-2 bg-gray-400 text-white text-xl md:text-2xl font-semibold"
                  onChange={selectVal}
                >
                  {showUserInfo ? (
                    <>
                      {showUserInfo.map((val, key) => {
                        return (
                          <>
                            <option
                              value={val.userID.name}
                              key={val.userID._id}
                            >
                              {val.userID.name}
                            </option>
                          </>
                        );
                      })}
                    </>
                  ) : (
                    ""
                  )}
                </select>
              </div>
              <br />

              <>
                {showSelect ? (
                  <>
                    {showUserInfo ? (
                      <>
                        {showUserInfo
                          .filter((item) => {
                            return item.userID.name === showSelect;
                          })
                          .map((val, key) => {
                            return (
                              <div className="flex space-x-6" key={key}>
                                <button
                                  className="text-xl text-[#ff673a] font-semibold"
                                  onClick={(event) => Accept(event, val)}
                                >
                                  Accept
                                </button>
                                <button
                                  className="text-xl text-white font-semibold"
                                  onClick={(event) => Reject(event, val)}
                                >
                                  Reject
                                </button>
                              </div>
                            );
                          })}
                      </>
                    ) : (
                      ""
                    )}
                  </>
                ) : (
                  ""
                )}
              </>
            </div>
            <br />
            <>
              {showSelect ? (
                <>
                  {showUserInfo ? (
                    <>
                      {showUserInfo
                        .filter((item) => {
                          return item.userID.name === showSelect;
                        })
                        .map((val, key) => {
                          return (
                            <>
                              <div
                                className="flex justify-center md:justify-start"
                                key={key}
                              >
                                <img
                                  src={pp}
                                  alt=""
                                  className="w-6 md:w-8 mr-4"
                                />
                                <h1 className="text-xl sm:text-2xl md:text-3xl text-[#ff673a] font-bold">
                                  {val.userID.name}
                                </h1>{" "}
                                &nbsp; &nbsp;
                                <a
                                  href="https://www.linkedin.com"
                                  className="w-6 md:w-8"
                                >
                                  <img src={linkd} alt="" />
                                </a>
                              </div>
                              <br />
                              <br />
                              <div className="flex p-2">
                                {val.userID.skills.length > 0 ? (
                                  <>
                                    <div className="w-[50%]">
                                      <h1 className="text-gray-300 text-lg md:text-xl">
                                        SKILLS
                                      </h1>
                                      <br />
                                      <div className="flex flex-wrap gap-2">
                                        {val.userID.skills.map((data, key) => {
                                          return (
                                            <p
                                              className="p-2 bg-gray-400 w-fit text-white rounded-full"
                                              key={key}
                                            >
                                              {data}
                                            </p>
                                          );
                                        })}
                                      </div>
                                    </div>
                                  </>
                                ) : (
                                  ""
                                )}

                                <div className="w-[50%]">
                                  <h1 className="text-gray-300 text-lg md:text-xl">
                                    MESSAGE
                                  </h1>
                                  <br />
                                  <p className="text-white md:text-lg">
                                    {val.message}
                                  </p>
                                </div>
                              </div>
                            </>
                          );
                        })}
                    </>
                  ) : (
                    ""
                  )}
                </>
              ) : (
                ""
              )}
            </>
          </div>
        </div>
      ) : (
        <div className="bg-[#28282B] flex flex-col items-center md:items-start md:flex-row w-[80%] p-4 mt-[10%] mx-5 rounded h-fit">
          <p className="text-[#fff] text-4xl text-center w-full my-5">
            No Applicants
          </p>
        </div>
      )}
    </>
  );
}

export default Applicants;
