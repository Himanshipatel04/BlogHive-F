import React from "react";
import himi from "../asset/photo.jpg";
import prince from "../asset/prince.jpg";

const Developers = () => {
  return (
    <div className="h-fit py-52 flex items-center justify-center">
      <div className="flex gap-80">
        <div className="flex gap-6 h-80 w-[410px] justify-center bg-black text-white items-center shadow-lg shadow-black rounded-tr-2xl rounded-bl-2xl">
          <img src={himi} className="h-72 w-62 pl-2 rounded-bl-2xl rounded-tr-2xl" alt="" />
          <div className="">
            <p className=" text-xl inria-sans-regular-italic">Himanshi Patel</p>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="flex gap-4 w-[410px] h-80 bg-black text-white justify-center items-center shadow-lg shadow-black rounded-tr-2xl rounded-bl-2xl">
          <img src={prince} className="h-80 py-3 w-56 object-cover pl-2 rounded-bl-3xl rounded-tr-3xl" alt="" />
          <div className="">
            <p className=" text-xl inria-sans-regular-italic">Prince Chaurasia</p>
            <p>Software Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developers;
