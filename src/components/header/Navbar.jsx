import React from "react";
import { Link } from "react-router-dom";
import squad from "../../public/squad.png";

function Navbar() {
  return (
    <div className="flex w-full justify-between items-center pt-10 px-16 ">
      <div className="w-40">
        <Link to="/">
          <img src={squad} alt="" className=" w-32" />
        </Link>
      </div>
      <div className="hidden xl:flex rounded-full font-medium border-2 border-[#f2673f] items-center text-lg">
        <Link
          to="/login"
          className="py-1 px-3 hover:text-[#f2673f] rounded text-white transition duration-300"
        >
          LOGIN
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
