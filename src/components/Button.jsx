import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      to={props.link}
      className="text-lg w-44 font-semibold duration-200 outline-2 px-4 py-2 text-center rounded-full bg-black text-white hover:scale-95"
    >
      {props.text}
    </Link>
  );
};

export default Button;
