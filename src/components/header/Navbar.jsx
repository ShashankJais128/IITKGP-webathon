import React, { useContext } from "react";
import { Link } from "react-router-dom";

// redux
import AuthContext from "../../store/auth-context";

// img
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
        <Link to="/myevents">
          <div
            style={{
              backgroundImage: `url('${authCtx.user.pic}')`,
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
