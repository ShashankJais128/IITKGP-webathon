import React, { useState, useEffect, useContext } from "react";

// Components
import MyEventCard from "./MyEventCard";
import CreateEvent from "./CreateEvent";

// img
import sqd from "../../public/create_squad.png";

// axios
import axios from "axios";

// state
import AuthContext from "../../store/auth-context";

function MyEventsList() {
  const [showModal, setShowModal] = useState({ show: false });
  const [showData, setData] = useState([]);

  const authCtx = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    setShowModal({ show: true });
  };

  useEffect(() => {
    reqData();
  }, []);

  const reqData = async () => {
    try {
      var request = {
        email: authCtx.user.email,
      };
      const resp = await axios.post("api/dashborads/Get", request, {
        headers: { Authorization: `${authCtx.token}` },
      });

      if (resp.data) {
        setData(resp.data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div className="w-[75%] mx-[5%] mt-10">
        <div className="flex justify-between">
          <h1 className="pl-5 text-3xl sm:text-4xl lg:text-5xl text-white font-bold">
            My Squads
          </h1>
          <button
            className="bg-[#28282b] rounded-sm px-2 py-1"
            onClick={handleClick}
          >
            <div className="flex items-center">
              <img src={sqd} alt="" className="w-6 h-6" />
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                &nbsp; Create a Squad
              </h1>
            </div>
          </button>
        </div>

        {/* event list */}
        <>
          {showData.length > 0 ? (
            <>
              <div className=" mt-10 p-10 justify-items-center grid grid-cols-1 lg:grid-cols-2 gap-4">
                {showData.map((val, key) => {
                  return (
                    <MyEventCard
                      title={val.name}
                      subtitle={val.subtitle}
                      venue={val.venue}
                      description={val.description}
                      date={val.date}
                      teamSize={val.teamSize}
                      image={val.image}
                      vacancy={val.vac}
                      id={val._id}
                      key={key}
                    />
                  );
                })}
              </div>
            </>
          ) : (
            <div className="bg-[#28282B] flex flex-col items-center md:items-start md:flex-row w-full p-4 mt-[5%] rounded">
              <p className="text-[#fff] text-4xl text-center w-full my-5">
                No Events
              </p>
            </div>
          )}
        </>
      </div>
      <CreateEvent showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default MyEventsList;
