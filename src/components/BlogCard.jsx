import React from "react";
import blog from "../asset/blog.png";

const BlogCard = () => {
  return (
    <div className="h-80 w-80 outline rounded-lg ">
      <div className="flex items-center justify-start gap-3 outline-3 outline rounded-lg p-2">
        <img src={blog} alt="" className="h-10 rounded-full" />
        <p className="text-lg font-semibold">Himanshi Patel</p>
      </div>
    </div>
  );
};

export default BlogCard;
