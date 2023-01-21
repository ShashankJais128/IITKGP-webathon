import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TagsInput from "./TagsInput";

function Signup() {
  const selectedTags = (tags) => {
    setUser({ Skill: tags });
    console.log(tags);
  };

  const [showUser, setUser] = useState({
    Name: "",
    Email: "",
    Skill: [],
    Portfolio: "",
    Password: "",
    Cpassword: "",
    College: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setUser.Skill = selectedTags;
    console.log(showUser);
  };

  const DataInp = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...showUser, [name]: value });
  };

  useEffect(() => {
    console.log(showUser);
  }, [showUser]);
  return (
    <div className=" pt-24 px-24">
      <div className="flex flex-row justify-center px-8">
        <div className="bg-gray-100 w-[500px] h-[500px] p-4 rounded-md">
          <div className="">
            <p className="font-semibold text-center text-3xl">Sign Up</p>
            <br />
          </div>
          <div className="">
            <form>
              {/* Name */}
              <div className="mb-5">
                <input
                  type="email"
                  name="Name"
                  id="Name"
                  className="w-[95%] rounded-md p-3"
                  placeholder="Enter your name"
                  value={showUser.name}
                  onChange={DataInp}
                />
              </div>
              {/* Email */}
              <div className="mb-5">
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="w-[95%] rounded-md p-3"
                  placeholder="Enter your email"
                  value={showUser.email}
                  onChange={DataInp}
                />
              </div>
              {/* college */}
              <div className="mb-5">
                <input
                  type="text"
                  name="College"
                  id="College"
                  className="w-[95%] rounded-md p-3"
                  placeholder="Enter your college name"
                  value={showUser.college}
                  onChange={DataInp}
                />
              </div>

              {/* Skill */}
              {/* <div className="mb-5">
                <input
                  type="text"
                  name="Skill"
                  id="Skill"
                  className="w-[95%] rounded-md p-3"
                  placeholder="Enter your skills"
                  value={showUser.skill}
                  onChange={DataInp}
                />
                <p>{showUser.Skill}</p>
              </div> */}

              <TagsInput selectedTags={selectedTags} tags={[]} />
              {/* portfolio */}
              <div className="mb-5">
                <input
                  type="text"
                  name="Portfolio"
                  id="Portfolio"
                  className="w-[95%] rounded-md p-3"
                  placeholder="Enter your portfolio"
                  value={showUser.portfolio}
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
                  placeholder="Password"
                  value={showUser.password}
                  onChange={DataInp}
                />
              </div>

              {/* conffirm password */}
              <div className="mb-5">
                <input
                  type="password"
                  name="CPassword"
                  id="CPassword"
                  className="w-[95%] rounded-md p-3"
                  placeholder="ConfirmPassword"
                  value={showUser.cpassword}
                  onChange={DataInp}
                />
              </div>
              <button
                className="w-[95%] mt-5 bg-blue-500 text-white rounded-md py-3 font-bold text-xl"
                onClick={submit}
              >
                Sign Up
              </button>
            </form>
            <p className="text-center mt-5">
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
