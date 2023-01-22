import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import AuthContext from "../../store/auth-context";
import axios from "axios";
import bg from "../../public/bgn.jpg";
import Navbar from "../header/Navbar";
function Login() {
  const [showUser, setUser] = useState({ Email: "", Password: "" });
  const [show, set] = useState("");
  const authCtx = useContext(AuthContext);
  const redirect = useNavigate();
  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "Email") {
      if (value.indexOf("@") === -1 || value.indexOf(".") === -1) {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }
    if (name === "Password") {
      if (value === "") {
        e.target.style.border = "2px solid  #FF0000";
        e.target.style.outline = "none";
      } else {
        e.target.style.border = "2px solid  transparent";
      }
    }

    setUser({ ...showUser, [name]: value });
  };

  const login = async () => {
    const { Email, Password } = showUser;

    if (
      Password !== "" &&
      Email !== "" &&
      Email.indexOf("@") > -1 &&
      Email.indexOf(".") !== -1
    ) {
      const userObject = {
        email: Email,
        password: Password,
      };
      try {
        const res = await axios.post("/api/user/Login", userObject, {
          headers: { Authorization: `` },
        });
        const data = res.data;

        if (data.success == true) {
          const info = data.user;

          await authCtx.login(
            info.name,
            info.email,
            info.avatar,
            res.data.token,
            10800000
          );
          if (authCtx.target == null) {
            redirect("/");
          } else {
            console.log(`/${authCtx.target}`)
            redirect(`/${authCtx.target}`);
            authCtx.settarget(null);
          }
        } else {
        }
      } catch (err) {
        console.error(err);
        set("Invalid Credentials");
      }
    } else {
      set("Please fill all the fields");
      console.log("Error");
    }
  };

  return (
    <div
      className="bg-black bg-cover bg-bottom bg-fixed pb-8"
      style={{
        backgroundImage: ` url(${bg})`,
      }}
    >
      <Navbar />
      <div className="flex flex-row justify-center px-8">
        <div className="bg-[#28282B] w-[500px] h-[500] p-4 rounded-md">
          <div className="">
            <p className="font-semibold text-center text-3xl text-white">
              Login
            </p>
            <br />
          </div>
          <div className="">
            {/* Email */}
            <div className="mb-5">
              <br />
              <input
                type="email"
                name="Email"
                id="Email"
                className="w-[95%] rounded-md p-3"
                placeholder="Ente your email"
                value={showUser.Email}
                onChange={DataInp}
              />
            </div>
            {/* Password */}
            <div className="mb-5">
              <input
                type="password"
                name="Password"
                id="Password"
                className="w-[95%] rounded-md p-3"
                placeholder="Enter your password"
                value={showUser.Password}
                onChange={DataInp}
              />
            </div>
            {show ? <p className="alertText">{show}</p> : ""}
            <button
              type="button"
              className="w-[95%] mt-5 bg-[#ff673a] text-white rounded-md py-3 font-bold text-xl"
              onClick={login}
            >
              Login
            </button>
            <br />
            <p className="text-center mt-5 text-white">
              Don't have an account?
              <Link to="/signup">
                <span className="text-blue-500">Sign up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
