import React from "react";
import Links from "../components/Data";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className=" bg-black h-20 inria-sans-light p-4 flex items-center justify-between">
         <Link to="/" className="p-1 text-right">
         <p className="inria-sans-light text-white tracking-wide text-2xl font-extrabold mb-1">BlogHive.</p>
          <p className=" text-sm text-center text-white tracking-widest">
            Write your heart out!
          </p></Link>

        <div className="pr-12">
          {Links.map((item, index) => (
            <a
              className="text-lg text-white p-10 font-semibold hover:text-xl transition-all "
              key={index}
              href={item.link}
            >
              {item.title}
            </a>
          ))}
          <Link to="/login" className=" text-white text-xl outline outline-2 outline-white px-4 py-1 text-center rounded-full hover:bg-white hover:text-black">
            LogIn
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
