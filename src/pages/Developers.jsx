import React from "react";
import himi from "../asset/photo.jpg";
import prince from "../asset/prince.jpg";
import Reload from "../components/Reload";

const Developers = () => {
  Reload();
  return (
    <div className="h-fit py-16 md:py-52 flex items-center justify-center ">
      <div className="flex gap-16 md:gap-80 flex-col md:flex-row items-center justify-center">
        <div className="flex gap-4 md:gap-6 h-80 w-[320px] md:w-[410px] justify-center bg-black text-white items-center shadow-lg shadow-black rounded-tr-2xl rounded-bl-2xl">
          <img
            src={himi}
            className="h-72 w-52 object-cover md:w-62 pl-2 rounded-bl-2xl rounded-tr-2xl"
            alt=""
          />
          <div className="">
            <p className="text-xl inria-sans-regular-italic">Himanshi Patel</p>
            <p>Software Developer</p>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 h-80 w-[320px] md:w-[410px] justify-center bg-black text-white items-center shadow-lg shadow-black rounded-tr-2xl rounded-bl-2xl">
          <img
            src={prince}
            className="h-72 w-52 object-cover md:w-62 pl-2 rounded-bl-2xl rounded-tr-2xl"
            alt=""
          />
          <div className="">
            <p className="text-xl inria-sans-regular-italic">Prince Chaurasia</p>
            <p>Software Developer</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Developers;
