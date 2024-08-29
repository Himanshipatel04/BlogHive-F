import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <Link
      onClick={props.func}
      className="text-base sm:text-xl w-32 sm:w-44 font-semibold duration-200 outline-2 px-4 sm:px-4 py-2 text-center rounded-full bg-black text-white hover:scale-95"
    >
      {props.text}
    </Link>
  );
};

export default Button;
