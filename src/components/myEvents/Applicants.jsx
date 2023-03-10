import React from "react";
import rect from "../../public/Rect.png";
import linkd from "../../public/linkedin.png";
import pp from "../../public/posted_by.png";

const skill = ["MongoDB", "React"];

function Applicants() {
  return (
    <div className="w-[75%] mx-[5%] mt-16">
      <img src={rect} alt="" />
      <div className=" bg-[#28282B] p-6">
        <div className="flex flex-col items-center md:flex-row md:justify-between mb-5">
          <div>
            <select
              name=""
              id=""
              className="p-2 bg-gray-400 text-white text-xl md:text-2xl font-semibold"
            >
              <option value="">RISHAV SINGH</option>
              <option value="">SHASHANK JAISWAL</option>
              <option value="">ADITYA RANJAN</option>
            </select>
          </div>
          <br />
          <div className="flex space-x-6">
            <button className="text-xl text-[#ff673a] font-semibold">
              Accept
            </button>
            <button className="text-xl text-white font-semibold">Reject</button>
          </div>
        </div>
        <br />
        <div className="flex justify-center md:justify-start">
          <img src={pp} alt="" className="w-6 md:w-8 mr-4" />
          <h1 className="text-xl sm:text-2xl md:text-3xl text-[#ff673a] font-bold">
            Rishav singh
          </h1>{" "}
          &nbsp; &nbsp;
          <a href="https://www.linkedin.com" className="w-6 md:w-8">
            <img src={linkd} alt="" />
          </a>
        </div>
        <br />
        <br />
        <div className="flex p-2">
          <div className="w-[50%]">
            <h1 className="text-gray-300 text-lg md:text-xl">SKILLS</h1>
            <br />
            <div className="flex flex-wrap gap-2">
              {skill.map((data) => {
                return (
                  <p className="p-2 bg-gray-400 w-fit text-white rounded-full">
                    {data}
                  </p>
                );
              })}
            </div>
          </div>
          <div className="w-[50%]">
            <h1 className="text-gray-300 text-lg md:text-xl">MESSAGE</h1>
            <br />
            <p className="text-white md:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis eius vel maxime laborum voluptates quia! Illo
              corporis sequi facilis nam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applicants;
