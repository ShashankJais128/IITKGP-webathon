import React from "react";
import bg from "../../public/bg.png";
import bg1 from "../../public/bg1.png";
import make from "../../public/make.png";
import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";
import MyEvents from "../myEvents/MyEvents";
import ExploreEvents from "../exploreEvents/ExploreEvents";

function Homemain() {
  return (
    <>
      <div
        className="bg-black bg-cover bg-bottom bg-fixed h-[100vh]  "
        style={{
          backgroundImage: ` url(${bg})`,
        }}
      >
        <Navbar />

        <div className=" flex">
          <div className="w-[50%] pl-36 pt-24 pr-24">
            <img src={make} alt="" className="w-[500px]" />
            <br />
            <p className="text-3xl text-white px-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              minima laudantium dolorem, exercitationem blanditiis provident
              nostrum harum.
            </p>
            <br />
            <br />
            <div className="flex space-x-12 px-16">
              <div className="hidden xl:flex w-fit rounded-full font-medium border-2 border-[#f2673f] items-center text-lg">
                <a
                  href="#explore"
                  className="py-1 px-3 hover:text-[#f2673f] rounded text-white transition duration-300"
                >
                  Browse Squad
                </a>
              </div>
              <div className="hidden xl:flex w-fit rounded-full font-medium border-2 border-[#f2673f] items-center text-lg">
                <Link
                  to="/myevents"
                  className="py-1 px-3 hover:text-[#f2673f] rounded text-white transition duration-300"
                >
                  Create Squad
                </Link>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <img src={bg1} alt="" className="w-[]" />
          </div>
        </div>
      </div>
      <ExploreEvents />
    </>
  );
}

export default Homemain;
