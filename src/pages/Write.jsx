import React, { useContext, useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import video from '../asset/writing.gif'
import userContext from "../context/user.context";

const Write = () => {
  const [data, setData] = useState();
  const router = useNavigate();
  const { user } = useContext(userContext);

  const handleChange = (e) => {
    setData({ ...data, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      router("/login"); 
      return;
    }
    try {
      const res = axios.post("/api/v1/blogs/createBlog", data);
      console.log(res);
      alert("Blog created successfully!");
      // router("/");
    } catch (error) {
      console.log(`Error while posting blog! ${error}`);
    }
  }; 

  return (
    <div className="h-screen inria-sans-regular flex items-center justify-center gap-40 ">
      <form
        action="post"
        className="flex flex-col items-center justify-center h-full gap-10"
      >
        <input
          type="text"
          className="shadow-black placeholder:font-semibold shadow-md w-96 p-2 h-10 outline-none border-none rounded-lg"
          placeholder="Enter username"
          onChange={handleChange}
          name=""
          required
          id="username"
        />
        <input
          type="text"
          className="shadow-black placeholder:font-semibold shadow-md w-96 h-10 p-2 outline-none border-none rounded-lg "
          placeholder="Enter title"
          onChange={handleChange}
          required
          name=""
          id="title"
        />
        <input
          type="text"
          className="shadow-black placeholder:font-semibold relative placeholder:absolute placeholder:top-2 shadow-md w-96 p-2 h-[200px] outline-none border-none rounded-lg"
          placeholder="Enter content"
          onChange={handleChange}
          required

          name=""
          id="content"
        />
        <Button text="Submit" func={handleSubmit} />
      </form>
      <img src={video} className="-mt-28" alt="" />
    </div>
  );
};

export default Write;
