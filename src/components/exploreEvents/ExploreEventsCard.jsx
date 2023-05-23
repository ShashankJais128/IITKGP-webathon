import React from "react";
import { Link } from "react-router-dom";

function ExploreEventsCard(props) {
  return (
    <div className=" bg-[#28282b] w-[320px] rounded-lg sm:w-[400px] md:w-[98%] h-[480px] sm:h-[500px] flex items-center flex-col">
      <div className="rounded-full mt-10">
        <img
          src={props.image}
          alt=""
          className="rounded-full w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] object-cover aspect-square"
        />
      </div>
      <h1 className="text-3xl sm:text-4xl py-2 font-semibold text-white">
        {props.title}
      </h1>
      <br />
      <div className="w-full px-8 flex justify-between">
        <div className="flex flex-col items-center font-semibold text-2xl sm:text-3xl">
          <h1 className="text-[#ff673a]">{props.teamSize}</h1>
          <h2 className="text-white">TEAM SIZE</h2>
        </div>
        <div className="flex flex-col items-center font-semibold text-2xl sm:text-3xl">
          <h1 className="text-[#ff673a]">{props.vacancy}</h1>
          <h2 className="text-white">VACANCY</h2>
        </div>
      </div>
      <br />
      <Link to={`/detailview/${props.id}`} className="w-full px-10">
        <button className="bg-[#ff673a] text-white text-2xl sm:text-3xl rounded-md font-semibold w-full">
          VIEW
        </button>
      </Link>
    </div>
  );
}

export default ExploreEventsCard;
