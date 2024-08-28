import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
// import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  // console.log(props.id);
  const [likes, setLikes] = useState(0);

  const handleLike = async () => {
    try {
      const res = await axios.post(`/api/v1/likes/createLike`, {
        blogId: props.id,
        
      });
      console.log(res);
       window.location.reload();
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

    const getLikes = async () => {
      try {
        const res = await axios.post(`/api/v1/likes/getLikes`, {
          blogId: props.id,
        });
        console.log(res.data.data.likeCount);
        setLikes(res.data.data.likeCount)
      } catch (error) {
        console.error("Error fetching likes on blog:", error);
      }
    };

    useEffect(() => {
      getLikes();
    }, []);

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 30) {
      return words.slice(0, 31).join(" ");
    }
    return content;
  };
  return (
    <div className="h-80 w-80 rounded-xl shadow-md relative shadow-black outline-none border-none">
      <div className="flex items-center justify-between px-6 shadow-md  bg-black text-white shadow-slate-500 rounded-tr-xl rounded-tl-xl p-2 inria-sans-regular-italic">
        <p className="text-lg font-semibold">{props.username}</p>
        <button className="flex items-center gap-1" onClick={handleLike}>
         <FaRegHeart className="text-white"/>{likes}
        </button>
      </div>
      <div className="flex p-3 flex-col gap-2 items-center justify-center">
        <p className="text-xl inria-sans-regular-italic">{props.title}</p>
        <p className="text-md">{truncateContent(props.content)}...</p>
      </div>
      <Link to={`/blog/${props.id}`} className="underline pl-2 absolute bottom-2 text-blue-700">
        Read more...
      </Link>
    </div>
  );
};

export default BlogCard;
