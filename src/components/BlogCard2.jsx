import React from "react";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";

const BlogCard2 = (props) => {
  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 30) {
      return words.slice(0, 25).join(" ");
    }
    return content;
  };

  const handleDeletion = async () => {
    try {
      const res = await axios.post(`/api/v1/blogs/deleteBlog/${props.id}`);
      console.log(res);
      alert("Blog deleted successfully!");
      window.location.reload();
    } catch (error) {
      console.log("error from deletion of file", error);
    }
  };

  return (
    <div className="h-fit w-full max-w-sm md:max-w-md lg:max-w-lg rounded-xl shadow-md relative shadow-black border-none overflow-hidden">
      <div className="flex justify-between px-4 py-2 bg-black text-white items-center shadow-md rounded-t-xl"> 
        <p className="text-base md:text-lg font-semibold">{props.username}</p>
        <MdDeleteOutline className="text-xl md:text-2xl cursor-pointer" onClick={handleDeletion} />
      </div>
      <div className="flex flex-col p-4 gap-2">
        <p className="text-lg md:text-xl font-semibold"> {props.title}</p>
        <p className="text-sm">{truncateContent(props.content)}...</p>
      </div>
      <Link
        to={`/blog/${props.id}`}
        className="underline text-blue-700 absolute bottom-4 left-4"
      >
        Read more...
      </Link>
    </div>
  );
};

export default BlogCard2;
