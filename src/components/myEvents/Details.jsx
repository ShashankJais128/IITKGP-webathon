import React, { useContext } from "react";

// redux
import AuthContext from "../../store/auth-context";

export default function Details() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="w-full text-white flex justify-center items-center gap-8">
      <img src={authCtx.user.pic} alt="" className="rounded-lg" />
      <div className="flex flex-col gap-8">
        <p className="text-4xl capitalize">{authCtx.user.name}</p>
        <p className="text-3xl">{authCtx.user.email}</p>
      </div>
    </div>
  );
}
