import React, { useState } from "react";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Login = () => {
  const [data, setData] = useState();
  const [showPassword, setShowPassword] = useState(false);

  const handlePassword = () => {
    setShowPassword(!showPassword);
  };

  const router = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = axios.post('https://bloghive-b.onrender.com/api/v1/users/login', data, {
        withCredentials: true  // Only if you need to send credentials (e.g., cookies)
      });
      console.log(res);
      alert("User login successfully!");
      router("/");
      window.location.reload();
    } catch (error) {
      console.log(`Error while logging in ${error}`);
    }
  };

  return (
    <div className="h-fit py-20 md:py-32 flex justify-center items-center">
      <div className="flex flex-col items-center rounded-2xl justify-center h-[450px] md:h-[500px] w-[350px] md:w-[400px] outline outline-white md:outline-none shadow-lg shadow-black">
        <p className="inria-sans-bold tracking-wide text-5xl font-extrabold mb-1">
          BlogHive
        </p>
        <form
          action="post"
          className="flex  flex-col items-center  justify-center p-10 gap-10  "
        >
          <div className="relative">
            <input
              className="w-72 pl-8 p-1 shadow-sm shadow-gray-700 rounded-lg outline-none border-none"
              type="text"
              id="username"
              onChange={handleChange}
              placeholder="Enter username"
            />
            <FaUser className="absolute top-2 left-2 text-gray-500" />
          </div>
          <div className="relative">
            <input
              className="w-72 p-1 shadow-sm pl-8 shadow-gray-700 rounded-lg outline-none border-none"
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              id="password"
              placeholder="Enter Password"
            />
            <MdOutlinePassword className="absolute top-2 left-2 text-gray-500" />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500"
              onClick={handlePassword}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}
            </button>
          </div>

          <div className="flex w-full items-center justify-center">
            <Button text="Login" func={handleSubmit} />
          </div>
        </form>
        <p>
          Don't have account?{" "}
          <Link
            to="/register"
            className="font-semibold underline hover:scale-95 hover:text-blue-800"
          >
            Click here!
          </Link>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Login;
