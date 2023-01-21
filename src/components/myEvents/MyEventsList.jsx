import React from "react";
import MyEventCard from "./MyEventCard";
import eveImg from "../../public/aboutimg.png";
import { myEvents } from "./EventData";

function MyEventsList() {
  return (
    <div className="mx-[5%] mt-10">
      <h1 className="pl-5 text-6xl font-bold">Your Events</h1>
      <div className="px-5">
        <hr className="h-1 bg-black px-5" />
      </div>

      {/* event list */}
      <div className="border-2 mt-10 p-10 flex flex-col space-y-10">
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
              k={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MyEventsList;
