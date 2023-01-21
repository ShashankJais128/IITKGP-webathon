import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [showUser, setUser] = useState({ Email: "", Password: "" });

  const submit = async (e) => {
    e.preventDefault();
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
    <div className=" pt-36 px-24">
      <div className="flex flex-row justify-center px-8">
        <div className="bg-gray-100 w-[500px] h-[400px] p-4 rounded-md">
          <div className="">
            <p className="font-semibold text-center text-3xl">Login</p>
          </div>
          <div className="">
            <form>
              {/* Email */}
              <div className="mb-5">
                <br />
                <input
                  type="email"
                  name="Email"
                  id="Email"
                  className="w-[95%] rounded-md p-3"
                  placeholder="Ente your email"
                  value={showUser.email}
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
                  value={showUser.password}
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
              Don't have an account?
              <Link to="/login">
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
