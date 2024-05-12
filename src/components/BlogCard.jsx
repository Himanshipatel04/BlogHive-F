import axios from "axios";
import React, { useEffect, useState } from "react";
import { FcLike } from "react-icons/fc";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  // console.log(props.id);
  const [likes, setLikes] = useState(0);

  const handleLike = async () => {
    try {
      const res = await axios.post(`/api/v1/likes/createLike`, {
        blogId: props.id,
      });
      window.location.reload();
      console.log(res);
      // setLikes(res.data.data.likeCount);
    } catch (error) {
      console.error("Error liking blog:", error);
    }
  };

  useEffect(() => {
    const getLikes = async () => {
      try {
        const res = await axios.post(`/api/v1/likes/getLikes`, {
          blogId: props.id,
        });
        console.log(res);
        setLikes(res.data.data.likeCount);
      } catch (error) {
        console.error("Error fetching likes on blog:", error);
      }
    };
    getLikes();
  }, []);

  const truncateContent = (content) => {
    const words = content.split(" ");
    if (words.length > 30) {
      return words.slice(0, 35).join(" ");
    }
    return content;
  };
  return (
    <div className="h-80 w-80 rounded-xl shadow-md shadow-black outline-none border-none">
      <div className="flex items-center justify-between px-6 shadow-md  bg-black text-white shadow-slate-500 rounded-tr-xl rounded-tl-xl p-2 inria-sans-regular-italic">
        <p className="text-lg font-semibold">{props.username}</p>
        <button className="flex items-center gap-1" onClick={handleLike}>
          <FcLike />
          {likes}
        </button>
      </div>
      <div className="flex p-3 flex-col gap-2 mt-3 items-center justify-center">
        <p className="text-xl inria-sans-regular-italic">{props.title}</p>
        <p className="font-medium">{truncateContent(props.content)}</p>
      </div>
      <Link to={`/blog/${props.id}`} className="underline p-4 text-blue-700">
        Read more...
      </Link>
    </div>
  );
};

export default BlogCard;
