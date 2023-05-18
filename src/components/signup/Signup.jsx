import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import TagsInput from "./TagsInput";
import axios from "axios";
import { async } from "q";
import bg from "../../public/bgn.jpg";
import Navbar from "../header/Navbar";

function Signup() {
  const [show, set] = useState("");

  const selectedTags = (tags) => {
    setUser({ ...showUser, Skill: tags });
    console.log(tags);
  };

  const authCtx = useContext(AuthContext);

  const redirect = useNavigate();

  const [showUser, setUser] = useState({
    Name: "",
    Email: "",
    Skill: [],
    Portfolio: "",
    Password: "",
    CPassword: "",
    College: "",
    Linkedin: "",
  });

  const submit = async (e) => {
    const {
      Name,
      Email,
      Skill,
      Portfolio,
      Password,
      CPassword,
      College,
      Linkedin,
    } = showUser;

    if (
      Name !== "" &&
      Email !== "" &&
      Skill.length !== [] &&
      Password !== "" &&
      College !== "" &&
      Email.indexOf("@") > -1 &&
      Email.indexOf(".") !== -1 &&
      Linkedin !== ""
    ) {
      if (Password === CPassword) {
        console.log("Same");
        const userObject = {
          name: Name,
          email: Email,
          skill: Skill,
          password: Password,
          Linkedin,
          College,
        };
        try {
          console.log("==========userObject===========");
          console.log(userObject);

          const res = await axios.post("/api/user/signup", userObject, {
            headers: { Authorization: `${authCtx.token}` },
          });
          const data = res.data;

          console.log(data);

          if (res.data.exists === false) {
            const info = data.user;
            await authCtx.login(
              info.name,
              info.email,
              info.avatar,
              res.data.token,
              10800000
            );
            if (authCtx.target === null) {
              redirect("/");
            } else {
              redirect(`/${authCtx.target}`);
              authCtx.settarget(null);
            }
          } else {
            alert("Account already exists . please login");
            redirect("/signin");
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        set("Passwords Does Not Match");
      }
    } else {
      set("Please fill all the fields");
      console.log("Error");
    }
  };

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
    } else if (value === "") {
      e.target.style.border = "2px solid  #FF0000";
      e.target.style.outline = "none";
    } else {
      e.target.style.border = "2px solid  transparent";
    }

    setUser({ ...showUser, [name]: value });
  };

  useEffect(() => {
    console.log(showUser);
  }, [showUser]);
  return (
    <div
      className="bg-black bg-cover bg-bottom bg-fixed pb-8"
      style={{
        backgroundImage: ` url(${bg})`,
      }}
    >
      <Navbar />
      <div className="flex flex-row justify-center pt-20 px-8">
        <div className="bg-[#28282B] w-[500px] p-4 rounded-md">
          <div className="">
            <p className="font-semibold text-center text-3xl text-white">
              Sign Up
            </p>
            <br />
          </div>
          <div className="">
            {/* Name */}
            <div className="mb-5">
              <input
                type="email"
                name="Name"
                id="Name"
                className="w-full rounded-md p-3"
                placeholder="Enter your name"
                onChange={DataInp}
              />
            </div>
            {/* Email */}
            <div className="mb-5">
              <input
                type="email"
                name="Email"
                id="Email"
                className="w-full rounded-md p-3"
                placeholder="Enter your email"
                onChange={DataInp}
              />
            </div>
            {/* college */}
            <div className="mb-5">
              <input
                type="text"
                name="College"
                id="College"
                className="w-full rounded-md p-3"
                placeholder="Enter your college name"
                onChange={DataInp}
              />
            </div>

            <TagsInput selectedTags={selectedTags} tags={[]} />
            {/* portfolio */}
            <div className="mb-5">
              <input
                type="text"
                name="Portfolio"
                id="Portfolio"
                className="w-full rounded-md p-3"
                placeholder="Enter your portfolio"
                onChange={DataInp}
              />
            </div>
            {/* linkedin */}
            <div className="mb-5">
              <input
                type="text"
                name="Linkedin"
                id="Linkedin"
                className="w-full rounded-md p-3"
                placeholder="Enter your linkedin id"
                onChange={DataInp}
              />
            </div>
            {/* Password */}
            <div className="mb-5">
              <input
                type="password"
                name="Password"
                id="Password"
                className="w-full rounded-md p-3"
                placeholder="Password"
                onChange={DataInp}
              />
            </div>

            {/* conffirm password */}
            <div className="mb-5">
              <input
                type="password"
                name="CPassword"
                id="CPassword"
                className="w-full rounded-md p-3"
                placeholder="ConfirmPassword"
                onChange={DataInp}
              />
            </div>
            <button
              type="button"
              className="w-full mt-5 bg-[#ff673a] text-white rounded-md py-3 font-bold text-xl"
              onClick={submit}
            >
              Sign Up
            </button>
            <p className="text-center mt-5 text-white">
              Already have an account?
              <Link to="/login">
                <span className="text-blue-500">Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
