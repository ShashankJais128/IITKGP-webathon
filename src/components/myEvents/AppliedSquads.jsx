import React, { useEffect } from "react";
import img from "../../public/Rect.png";
import peop from "../../public/posted_by.png";
import { useState, useContext } from "react";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import linkd from "../../public/linkedin.png";

function AppliedSquads() {
  const [loading, setLoading] = useState(true);
  const [allrequest, setAllrequest] = useState([]);
  const authCtx = useContext(AuthContext);
  async function getsquads() {
    try {
      const resp = await axios.post(
        "api/dashborads/Get",
        { email: authCtx.user.email },
        {
          headers: { Authorization: `${authCtx.token}` },
        }
      );
      const data = resp.data;
      console.log(data);
      if (resp.status == 202) {
        setAllrequest(data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    getsquads();
  }, []);
  return (
    <div className="w-[75%] mx-[5%] mt-20">
      <h1 className="text-white text-4xl font-semibold mb-5">Applied Squads</h1>
      <div className="flex flex-col w-full space-y-4">
        {loading ? (
          <div></div>
        ) : (
          <>
            {allrequest ? (
              <>
                {" "}
                {allrequest.map((data) => {
                  console.log(allrequest);
                  return (
                    <div className="bg-[#28282B] flex flex-col items-center md:items-start md:flex-row w-full p-4">
                      <div className="">
                        <img
                          src={data.competitionID.image}
                          alt=""
                          className="w-[180px] h-[180px]"
                        />
                      </div>
                      <div className="px-6 w-full flex flex-col justify-between">
                        <div>
                          <h1 className="text-3xl text-center md:text-start font-semibold text-[#ff673a]">
                            {data.title}
                          </h1>
                        </div>
                        <div className="w-full ">
                          <p className="text-center md:text-right text-white text-lg">
                            {data.status}
                          </p>
                        </div>
                        <div className="flex justify-center md:justify-start  pb-4">
                          <img src={peop} alt="" className="w-6" />
                          <h1 className="text-white text-xl md:text-start">
                            &nbsp; Posted by:{" "}
                            <span className="underline">Rishav Singh</span>
                            &nbsp; &nbsp;
                          </h1>
                          <a href="https://www.linkedin.com" className="w-5">
                            <img src={linkd} alt="" />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              ""
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default AppliedSquads;
