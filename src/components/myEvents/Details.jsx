import React, { useContext } from "react";

// redux
import AuthContext from "../../store/auth-context";

export default function Details() {
  const authCtx = useContext(AuthContext);
  return (
    <div>
      Details
      <p>authCtx.user.name</p>
      <p>authCtx.user.email</p>
    </div>
  );
}
