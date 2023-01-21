import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex w-full justify-between items-center p-4 fixed bg-gray-400">
      <div className="w-40">
        <img
          src="https://krs.kiit.ac.in/assets/KRS.b5e08628.png"
          alt=""
          className="h-12 w-12"
        />
      </div>
      <div className="text-lg">
        <Link to="/" className="px-2">
          My Events
        </Link>
        <Link to="/explore" className="px-2">
          Explore Events
        </Link>
        <Link
          to="/"
          className="py-1 px-3 hover:text-black rounded transition duration-300"
        >
          <select name="" id="">
            User
            <option value="" selected>
              User
            </option>
            <option value="">User1</option>
            <option value="">User2</option>
            <option value="">User3</option>
          </select>
        </Link>
        {/* <a href="#contact" className="px-2">
          Contact Us
        </a> */}
      </div>
      <div className="hidden xl:flex rounded-full font-medium  bg-yellow-500 items-center text-lg">
        <Link
          to="/login"
          className="py-1 px-3 hover:text-black rounded transition duration-300"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
