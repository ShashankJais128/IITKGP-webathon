import React, { useContext } from "react";

// redux
import AuthContext from "../../store/auth-context";

export default function Details() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="w-full text-white flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8">
      <img
        src={authCtx.user.pic}
        alt=""
        className="rounded-lg w-28 sm:w-36 lg:w-44"
      />
      <div className="flex flex-col items-center lg:items-start gap-8">
        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold capitalize">
          {authCtx.user.name}
        </p>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          {authCtx.user.email}
        </p>
      </div>
    </div>
  );
}
