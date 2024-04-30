import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className=" h-36 bg-black text-white pt-6 pl-20 flex items-start justify-between pr-44 ">
        <div className="flex items-start justify-start gap-56">
          <div className="flex flex-col gap-8 inria-sans-regular">
            <h1 className="text-xl inria-sans-regular-italic">Help</h1>
            <Link className="underline text-lg">Help Center</Link>
          </div>
          <div className="flex flex-col gap-8 inria-sans-regular">
            <h1 className="text-xl inria-sans-regular-italic">Feedback</h1>
            <Link className="underline text-lg">Feedback Forum</Link>
          </div>
          <div className="flex flex-col gap-8 inria-sans-regular">
            <h1 className="text-xl inria-sans-regular-italic">Developers</h1>
            <Link to="/developers" className="underline text-lg">Our developers</Link>
          </div>
        </div>
        <div className="flex flex-col items-end justify-start gap-2 inria-sans-regular">
          <p className="text-xl inria-sans-regular-italic">Connect with us!</p>
          <div className="text-right">
            <p>Contact No:+918090900602</p>
            <p>bloghive@gmail.com</p>
            <p>Bhopal (M.p.)</p>
          </div>
        </div>
      </div>
      <p className="bg-black text-center text-white p-2">
        &copy; All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
