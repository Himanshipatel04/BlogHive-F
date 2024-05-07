import React, { useContext, useState, useEffect } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import userContext from "../context/user.context";
import { SiVirustotal } from "react-icons/si";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from "../components/Button";
import { FaUserCog } from "react-icons/fa";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const route = useNavigate();
  const { user } = useContext(userContext);
  const [totalBlogs, setTotalBlogs] = useState(0);

  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/users/logout");
      localStorage.removeItem("accessToken");
      alert("User logout!");
      route("/");
      window.location.reload();
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  useEffect(() => {
    const getTotalBlogs = async () => {
      try {
        const res = await axios.post("/api/v1/users/getTotalBlogs");
        setTotalBlogs(res.data.data.totalBlogs);
      } catch (error) {
        console.error("Error fetching total blogs:", error);
      }
    };

    getTotalBlogs();
  }, []);

  if (!user) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  return (
    <div className="h-screen p-20">
      <div className="h-fit p-4 w-[500px] flex flex-col items-center justify-center gap-3 shadow-lg border-none outline-none rounded-xl shadow-black">
        <FaRegUserCircle className="text-6xl " />
        <span className="text-2xl inria-sans-light-italic ">
          {user.username}
        </span>
        <span className="font-semibold">
          <span className="font-bold">Email</span> : {user.email}
        </span>
        <div className="flex flex-col gap-3 items-center justify-start">
          <span className="flex gap-2 items-center justify-start">
            {" "}
            <SiVirustotal className=" -rotate-90" /> Total blogs posted:{" "}
            {totalBlogs}{" "}
          </span>
          <span className="flex gap-2 items-center justify-start font-semibold underline">
            <FaUserCog className="text-2xl" /><Link to="/username">Change Username</Link>
          </span>
          <span className="flex gap-5 items-center justify-start font-semibold underline">
            <RiLockPasswordLine className="text-2xl" /><Link to="/password">Change Password</Link>
          </span>
        </div>
        <Button text="Logout" func={handleLogout} />
      </div>
    </div>
  );
};

export default Profile;
