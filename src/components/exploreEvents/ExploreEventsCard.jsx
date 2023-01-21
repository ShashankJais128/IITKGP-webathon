import React from "react";

function ExploreEventsCard(props) {
  return (
    <div className=" bg-[#28282b] w-[420px] h-[500px] flex items-center flex-col">
      <div className="rounded-full pt-16">
        <img
          src={props.image}
          alt=""
          className="rounded-full w-[180px] h-[180px] "
        />
      </div>
      <h1 className="text-4xl pt-2 font-semibold text-white">{props.title}</h1>
      <br />
      <div className="w-full px-8 flex justify-between">
        <div className="flex flex-col items-center font-semibold text-3xl">
          <h1 className="text-[#ff673a]">{props.teamSize}</h1>
          <h2 className="text-white">TEAM SIZE</h2>
        </div>
        <div className="flex flex-col items-center font-semibold text-3xl">
          <h1 className="text-[#ff673a]">{props.vacancy}</h1>
          <h2 className="text-white">VACANCY</h2>
        </div>
      </div>
      <br />
      <button className="bg-[#ff673a] text-white text-3xl font-semibold w-[90%]">
        VIEW
      </button>
    </div>
  );
}

export default ExploreEventsCard;
