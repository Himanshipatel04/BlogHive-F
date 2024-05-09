import React, { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

const Blog = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const res = await axios.post("/api/v1/blogs/getAllBlogs");
      setData(res.data?.data || []);
      // console.log(res.data.data);
    };
    getAllBlogs();
  }, []);

  return (
    <div className="flex items-center justify-center h-fit p-10 flex-wrap gap-16">
      {data.map((item, key) => (
        <BlogCard
          key={key}
          id={item._id}
          username={item.author.username}
          title={item.title}
          content={item.content}
        />
      ))}
    </div>
  );
};

export default Blog;
