import React from "react";
import sq from "../../public/my_squads.png";
import ap from "../../public/applied.png";
import AuthContext from "../../store/auth-context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const authCtx = useContext(AuthContext);
  function logout() {
    authCtx.logout();
  }
  return (
    <div className="w-[20%] pt-8 min-h-full">
      <div>
        <h1 className="hidden sm:block text-white text-2xl font-semibold pl-1 sm:pl-6">
          Dashboard
        </h1>
      </div>
      <div className="bg-[#28282B] opacity-75 min-h-screen ml-6 mt-4 p-2">
        <Link to="/dashboard/">
          <div className="flex bg-gray-700 p-2 rounded-md mb-3">
            <img src={sq} alt="" className="w-5" />
            <h1 className="hidden sm:block text-white">&nbsp; My Squads</h1>
          </div>
        </Link>

        <div onClick={logout} className="flex bg-gray-700 p-2 rounded-md">
          <img src={ap} alt="" className="w-5" />
          <h1 className="text-white">&nbsp; Logout</h1>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
