import React, { useEffect, useContext } from "react";
import MyEventCard from "./MyEventCard";
import eveImg from "../../public/aboutimg.png";
import sqd from "../../public/create_squad.png";

import CreateEvent from "./CreateEvent";
import axios from "axios";
import AuthContext from "../../store/auth-context";
import { useState } from "react";

function MyEventsList() {
  const authCtx = useContext(AuthContext);
  const [myEvents, setMyEvents] = useState({});
  const [showModal, setShowModal] = useState({ show: false });
  const [loading, setLoading] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
    setShowModal({ show: true });
  };

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
        setMyEvents(data);
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
          {loading ? (
            <div>loading</div>
          ) : (
            <>
              {myEvents.map((eve, i) => {
                return (
                  <MyEventCard
                    id={eve._id}
                    title={eve.name}
                    venue={eve.venue}
                    description={eve.des}
                    date={eve.date}
                    teamSize={eve.teamSize}
                    image={eve.image}
                    postDate={eve.postDate}
                    vacancy={eve.vac}
                    k={i}
                  />
                );
              })}
            </>
          )}
        </div>
      </div>
      <CreateEvent
        showModal={showModal}
        setShowModal={setShowModal}
        refresh={getsquads}
      />
    </>
  );
}

export default MyEventsList;
