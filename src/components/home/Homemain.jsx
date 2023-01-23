import React from "react";
import bg from "../../public/bg.png";
import bg1 from "../../public/bg1.png";
import make from "../../public/make.png";
import { Link } from "react-router-dom";
import Navbar from "../header/Navbar";
import MyEvents from "../myEvents/MyEvents";
import { useContext } from "react";
import ExploreEvents from "../exploreEvents/ExploreEvents";
import AuthContext from "../../store/auth-context";

function Homemain() {
  const authCtx = useContext(AuthContext);
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
          <div className="w-full md:w-[50%] px-12  xl:pl-36 pt-12 sm:pt-24 xl:pr-24">
            <img src={make} alt="" className="w-[500px]" />
            <br />
            <p className="text-xl lg:text-3xl text-white px-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
              minima laudantium dolorem, exercitationem blanditiis provident
              nostrum harum.
            </p>
            <br />
            <br />
            <div className="flex flex-col sm:flex-row space-x-6 sm:space-x-2 md:space-x-4 lg:space-x-10 pl-6 lg:pl-12">
              <div className="xl:flex w-fit rounded-full font-medium border-2 border-[#f2673f] items-center text-base lg:text-lg">
                <a
                  href="#explore"
                  className="py-1 px-3 hover:text-[#f2673f] rounded text-white transition duration-300"
                >
                  Browse Squad
                </a>
              </div>
              <div className="xl:flex w-fit rounded-full font-medium border-2 border-[#f2673f] items-center text-lg">
                <Link
                  to={authCtx.isLoggedIn ? "/dashboard" : "/login"}
                  onClick={authCtx.settarget("dashboard")}
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
