import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="">
      <div className="h-auto bg-black text-white pt-6 px-6 md:px-20 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-0 md:pr-20">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-20">
          <div className="flex flex-col gap-4 md:gap-8 inria-sans-regular">
            <h1 className="text-lg md:text-xl inria-sans-regular-italic">Help</h1>
            <Link className="underline text-base md:text-lg">Help Center</Link>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 inria-sans-regular">
            <h1 className="text-lg md:text-xl inria-sans-regular-italic">Feedback</h1>
            <Link className="underline text-base md:text-lg">Feedback Forum</Link>
          </div>
          <div className="flex flex-col gap-4 md:gap-8 inria-sans-regular">
            <h1 className="text-lg md:text-xl inria-sans-regular-italic">Developers</h1>
            <Link to="/developers" className="underline text-base md:text-lg">
              Our developers
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start md:items-end justify-start gap-2 inria-sans-regular mt-6 md:mt-0">
          <p className="text-lg md:text-xl inria-sans-regular-italic">Connect with us!</p>
          <div className="text-left md:text-right">
            <p>Contact No:+918090900602</p>
            <p>bloghive@gmail.com</p>
            <p>Bhopal (M.p.)</p>
          </div>
        </div>
      </div>
      <p className="bg-black text-center text-white py-2">
        &copy; All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
