import React, { useState, useEffect, useContext } from "react";

// Components
import MyEventCard from "./MyEventCard";
import CreateEvent from "./CreateEvent";

// img
import eveImg from "../../public/aboutimg.png";
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

      console.table(resp.data);
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
          <h1 className="pl-5 text-3xl sm:text-4xl lg:text-6xl text-white font-bold">
            My Squads
          </h1>
          <button className="bg-[#28282b] px-2 py-1" onClick={handleClick}>
            <div className="flex">
              <img src={sqd} alt="" className="w-4 sm:w-6" />
              <h1 className="text-white text-lg sm:text-xl font-semibold">
                &nbsp; Create a Squad
              </h1>
            </div>
          </button>
        </div>

        {/* event list */}
        <div className=" mt-10 p-10 justify-items-center grid grid-cols-1 lg:grid-cols-2 gap-4">
          {showData ? (
            <>
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
                    key={key}
                  />
                );
              })}
            </>
          ) : (
            ""
          )}
        </div>
      </div>
      <CreateEvent showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default MyEventsList;
