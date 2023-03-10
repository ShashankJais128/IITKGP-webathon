import React from "react";
import MyEventCard from "./MyEventCard";
import eveImg from "../../public/aboutimg.png";
import sqd from "../../public/create_squad.png";
import { myEvents } from "./EventData";
import CreateEvent from "./CreateEvent";
import { useState } from "react";

function MyEventsList() {
  const [showModal, setShowModal] = useState({ show: false });
  const handleClick = (e) => {
    e.preventDefault();
    setShowModal({ show: true });
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
          {myEvents.map((eve, i) => {
            return (
              <MyEventCard
                title={eve.title}
                subtitle={eve.subtitle}
                venue={eve.venue}
                description={eve.description}
                date={eve.date}
                teamSize={eve.teamSize}
                image={eve.image}
                vacancy={eve.vacancy}
                k={i}
              />
            );
          })}
        </div>
      </div>
      <CreateEvent showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default MyEventsList;
