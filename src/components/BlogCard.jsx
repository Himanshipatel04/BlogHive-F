import React from "react";
import {Link} from "react-router-dom"

const BlogCard = (props) => {
  const truncateContent = (content) => {
    const words = content.split(' ');
    if (words.length > 30) {
      return words.slice(0, 35).join(' ');
    }
    return content;
  };
  return (
    <div className="h-80 w-80 rounded-xl shadow-md shadow-black">
      <div className="flex items-center justify-center gap-3 outline-3 shadow-md  bg-black text-white shadow-slate-500 rounded-tr-xl rounded-tl-xl p-2 inria-sans-regular-italic">
        <p className="text-lg font-semibold">{props.username}</p>
      </div>
      <div className="flex p-3 flex-col gap-3  items-center justify-center">
        <p className="text-xl inria-sans-regular-italic">{props.title}</p>
        <p className="font-medium">{truncateContent(props.content)}</p>
      </div>
        <Link to={`/blog/${props.id}`} className="underline p-4 text-blue-700">Read more...</Link>
    </div>
  );
};

export default BlogCard;
