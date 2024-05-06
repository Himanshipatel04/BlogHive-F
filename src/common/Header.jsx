import React, { useContext } from "react";
import Links from "../components/Data";
import { Link } from "react-router-dom";
import userContext from "../context/user.context";
import axios from "axios";

const Header = () => {
  const { user, setUser } = useContext(userContext); // Access user authentication state from context
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/users/logout");
      localStorage.removeItem("accessToken");
      setUser(null);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <div>
      <nav className=" bg-black inria-sans-light py-1 px-16 flex items-center justify-between">
        <Link to="/" className="p-1 grid gap-1">
          <p className="inria-sans-regular2 font-extrabold text-white tracking-wide text-4xl">
            BlogHive.
          </p>
          <p className=" text-xs font-semibold text-right text-white tracking-wider">
            Write your heart out!
          </p>
        </Link>

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
          {user ? (
            <Link
              onClick={handleLogout}
              className="text-white text-xl outline outline-2 outline-white px-4 py-1 text-center rounded-full hover:bg-white hover:text-black"
            >
              Logout
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
