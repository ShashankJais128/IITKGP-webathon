import React from "react";
import sq from "../../public/my_squads.png";
import ap from "../../public/applied.png";

function Sidebar() {
  return (
    <div className="w-[200px] pt-8 min-h-screen">
      <div>
        <h1 className="text-white text-2xl font-semibold pl-6">Dashboard</h1>
      </div>
      <div className="bg-[#28282B] min-h-screen ml-6 mt-4 p-2">
        <div className="flex">
          <img src={sq} alt="" className="w-5" />
          <h1>My Squads</h1>
        </div>
        <div className="flex">
          <img src={ap} alt="" className="w-5" />
          <h1>Applied Squads</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
