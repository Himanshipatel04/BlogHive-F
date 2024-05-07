import React, { useContext } from "react";
import Links from "../components/Data";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import userContext from "../context/user.context";

const Header = () => {
  const { user} = useContext(userContext);

  const handleProfile = async() => {
    console.log("Inside handle profile!");
  }

  
  return (
    <div>
      <nav className=" bg-black h-20 inria-sans-light py-1 px-16 flex items-center justify-between">
        <Link to="/" className="p-1 grid gap-1">
          <p className="inria-sans-regular2 font-extrabold text-white tracking-wide text-4xl">
            BlogHive.
          </p>
          <p className=" text-xs font-semibold text-right text-white tracking-wider">
            Write your heart out!
          </p>
        </Link>

        <div className="pr-8 flex gap-10 items-center justify-between">
          {Links.map((item, index) => (
            <a
              className="text-lg text-white p-10 font-semibold hover:text-xl transition-all "
              key={index}
              href={item.link}
            >
              {item.title}
            </a>
          ))}
          {user ? (
            <Link
              onClick={handleProfile}
              to="/profile"
              className="text-white text-4xl"
            >
             <FaUserCircle />
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-white text-xl outline outline-2 outline-white px-4 py-1 text-center rounded-full hover:bg-white hover:text-black"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
