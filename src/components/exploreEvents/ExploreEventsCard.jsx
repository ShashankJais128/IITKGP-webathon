import React from "react";
import eveImg from "../../public/aboutimg.png";

function ExploreEventsCard(props) {
  return (
    <div className="border-2 bg-gray-200 rounded-md">
      {/* eve card */}
      <div className="p-5 flex">
        <img
          src={props.image}
          alt=""
          className="w-[400px] h-[300px] rounded-md"
        />
        <div className="pl-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between">
              <div>
                <h1 className="font-semibold text-4xl">{props.title}</h1>
                <h2>{props.subtitle}</h2>
              </div>
              <div>
                <h1>{props.date}</h1>
                <h1>{props.venue}</h1>
              </div>
            </div>

            <br />
            <p className="text-justify pl-2">{props.description}</p>
          </div>
          <div className="flex space-x-5">
            <h5 className="mb-5 bg-gray-400 w-fit p-2 rounded-md">
              Vacancy: {props.teamSize}
            </h5>
            <button className="mb-5 bg-gray-400 w-fit p-2 rounded-md">
              Join
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExploreEventsCard;
