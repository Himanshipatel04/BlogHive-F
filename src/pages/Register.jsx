import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { MdOutlinePassword } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const Register = () => {
  return (
    <div className="h-[727px] flex justify-center items-center">
      <div className="flex flex-col items-center rounded-2xl justify-center h-[500px] w-[400px] shadow-lg shadow-black">
        <p className="inria-sans-bold tracking-wide text-5xl font-extrabold mb-1">
          BlogHive
        </p>
        <form
          action="post"
          className="flex  flex-col items-center  justify-center p-10 gap-10  "
        >
          <div className="relative">
            <input
              className="w-72 p-1 pl-8 shadow-sm shadow-gray-700 rounded-lg outline-none border-none"
              type="email"
              name=""
              id=""
              placeholder="Enter email"
            />
            <MdEmail className="absolute top-2 left-2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              className="w-72 pl-8 p-1 shadow-sm shadow-gray-700 rounded-lg outline-none border-none"
              type="text"
              name=""
              id=""
              placeholder="Enter username"
            />
            <FaUser className="absolute top-2 left-2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              className="w-72 p-1 shadow-sm pl-8 shadow-gray-700 rounded-lg outline-none border-none"
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
            />
            <MdOutlinePassword className="absolute top-2 left-2 text-gray-400" />
          </div>
          <div className="flex w-full items-center justify-center">
            <Button text="Register" link="/" />
          </div>
        </form>
        <p>
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-semibold underline hover:scale-95 hover:text-blue-800"
          >
            Login
          </Link>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default Register;
