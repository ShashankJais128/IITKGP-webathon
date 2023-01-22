import React from "react";
import sq from "../../public/my_squads.png";
import ap from "../../public/applied.png";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-[20%] pt-8 min-h-screen">
      <div>
        <h1 className="text-white text-2xl font-semibold pl-6">Dashboard</h1>
      </div>
      <div className="bg-[#28282B] opacity-75 min-h-screen ml-6 mt-4 p-2">
        <Link to="/myevents/myeventlist">
          <div className="flex bg-gray-700 p-2 rounded-md mb-3">
            <img src={sq} alt="" className="w-5" />
            <h1 className="text-white">&nbsp; My Squads</h1>
          </div>
        </Link>
        <Link to="/myevents/appsquad">
          <div className="flex bg-gray-700 p-2 rounded-md">
            <img src={ap} alt="" className="w-5" />
            <h1 className="text-white">&nbsp; Applied Squads</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
