import React, { useContext } from "react";

// redux
import AuthContext from "../../store/auth-context";

// css
import DCss from "./Css/Details.module.css";

export default function Details() {
  const authCtx = useContext(AuthContext);
  return (
    <div className={DCss.mDiv}>
      <h1>Details</h1>
      <p>{authCtx.user.name}</p>
      <p>{authCtx.user.email}</p>
    </div>
  );
}
