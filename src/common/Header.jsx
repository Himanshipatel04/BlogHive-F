import React, { useContext } from "react";
import Links from "../components/Data";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import userContext from "../context/user.context";

const Header = () => {
  const { user } = useContext(userContext);

  const handleProfile = async () => {
    console.log("Inside handle profile!");
  };

  return (
    <div>
      <nav className="bg-black h-20 inria-sans-light py-1 md:px-16 px-4 flex items-center justify-between">
        <Link to="/" className="p-1 grid gap-1">
          <p className="inria-sans-regular2 font-extrabold text-white tracking-wide text-2xl md:text-4xl">
            BlogHive.
          </p>
          <p className="text-xs font-semibold text-right text-white tracking-wider hidden sm:block">
            Write your heart out!
          </p>
        </Link>

        <div className="flex items-center justify-between md:gap-10">
          <div className="hidden md:flex">
            {Links.map((item, index) => (
              <a
                className="text-sm md:text-lg text-white md:px-4 py-1 font-semibold hover:text-xl transition-all"
                key={index}
                href={item.link}
              >
                {item.title}
              </a>
            ))}
          </div>

          {user ? (
            <Link
              onClick={handleProfile}
              to="/profile"
              className="text-white text-3xl md:text-4xl"
            >
              <FaUserCircle />
            </Link>
          ) : (
            <Link
              to="/login"
              className="text-white text-sm md:text-xl outline outline-2 outline-white px-3 md:px-4 py-1 text-center rounded-full hover:bg-white hover:text-black transition-all"
            >
              Login
            </Link>
          )}
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className="flex md:hidden justify-around bg-black py-2">
        {Links.map((item, index) => (
          <a
            className="text-sm text-white font-semibold"
            key={index}
            href={item.link}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
