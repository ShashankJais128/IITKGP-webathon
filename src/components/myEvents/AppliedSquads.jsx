import React from "react";
import img from "../../public/Rect.png";
import peop from "../../public/posted_by.png";
import linkd from "../../public/linkedin.png";

const appSquad = [
  {
    title: "ALPINE TURBINE SQUADS",
    image: img,
    status: "Rejected",
    postby: "Rishav Singh",
  },
  {
    title: "ALPINE TURBINE SQUADS",
    image: img,
    status: "Applied",
    postby: "Shashank",
  },
  {
    title: "ALPINE TURBINE SQUADS",
    image: img,
    status: "Accepted",
    postby: "Aditya",
  },
];

function AppliedSquads() {
  return (
    <div className="w-[75%] mx-[5%] mt-20">
      <h1 className="text-white text-4xl font-semibold mb-5">Applied Squads</h1>

      <div className="flex flex-col w-full space-y-4">
        {appSquad.map((data) => {
          return (
            <div className="bg-[#28282B] flex flex-col items-center md:items-start md:flex-row w-full p-4">
              <div className="">
                <img src={data.image} alt="" className="w-[180px] h-[180px]" />
              </div>
              <div className="px-6 w-full flex flex-col justify-between">
                <div>
                  <h1 className="text-3xl text-center md:text-start font-semibold text-[#ff673a]">
                    {data.title}
                  </h1>
                </div>
                <br />
                <div className="w-full ">
                  <p className="text-center md:text-right text-white text-lg">
                    {data.status}
                  </p>
                </div>
                <br />
                <div className="flex justify-center md:justify-start pb-4">
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
      </div>
    </div>
  );
}

export default AppliedSquads;
