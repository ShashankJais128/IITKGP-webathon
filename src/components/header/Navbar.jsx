import React from "react";
import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import { Link } from "react-router-dom";
import squad from "../../public/squad.png";

function Navbar() {
  const authCtx = useContext(AuthContext);

  return (
    <div className="flex w-full justify-between items-center pt-10 px-16 ">
      <div className="w-40">
        <Link to="/">
          <img src={squad} alt="" className=" w-32" />
        </Link>
      </div>
      {authCtx.isLoggedIn && (
        <Link to="/dashboard">
          <div
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGljfGVufDB8fDB8fA%3D%3D&w=1000&q=80')",
            }}
            className="  w-10 h-10 xl:flex rounded-full font-medium border-2 border-[#f2673f] items-center text-lg"
          ></div>
        </Link>
      )}
      {!authCtx.isLoggedIn && (
        <div className="xl:flex rounded-full font-medium border-2 border-[#f2673f] items-center text-lg">
          <Link
            to="/login"
            className="py-1 px-3 hover:text-[#f2673f] rounded text-white transition duration-300"
          >
            LOGIN
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
