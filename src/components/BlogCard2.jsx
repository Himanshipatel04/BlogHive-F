import React from "react";
import {Link} from "react-router-dom"
import { MdDeleteOutline } from "react-icons/md";
import axios from "axios";

const BlogCard2 = (props) => {
  const truncateContent = (content) => {
    const words = content.split(' ');
    if (words.length > 30) {
      return words.slice(0, 35).join(' ');
    }
    return content;
  };
  
    const handleDeletion = async() => {
    try {
      const res = await axios.post(`/api/v1/blogs/deleteBlog/${props.id}`)
      console.log(res);
      alert("Blog deleted successfully!")
      window.location.reload()
    } catch (error) {
      console.log("error from deletion of file",error);
    }
   }

  return (
    <div className="h-80 w-80 rounded-xl shadow-md shadow-black outline-none border-none">
      <div className="flex  justify-between px-5 shadow-md items-center  bg-black text-white shadow-slate-500 rounded-tr-xl rounded-tl-xl p-2 inria-sans-regular-italic">
        <p className="text-lg font-semibold">{props.username}</p>
        <MdDeleteOutline className="text-2xl" onClick={handleDeletion}  />
      </div>
      <div className="flex p-3 flex-col gap-2 mt-3 items-center justify-center">
        <p className="text-xl inria-sans-regular-italic">{props.title}</p>
        <p className="font-medium">{truncateContent(props.content)}</p>
      </div>
        <Link to={`/blog/${props.id}`} className="underline p-4 text-blue-700">Read more...</Link>
    </div>
  );
};

export default BlogCard2;
