// src/components/Blog.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Reload from "../components/Reload";

const SinglePage = () => {
  Reload();
  const [blog, setBlog] = useState(null);
  const [author, setAuthor] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.post(`/api/v1/blogs/getBlogsById/${id}`);
        setBlog(response.data);
        fetchAuthor(response.data.author);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };
    fetchBlog();
  }, [id]);

  const fetchAuthor = async (authorId) => {
    try {
      const authorResponse = await axios.post(`/api/v1/blogs/getAuthor/${authorId}`);
      setAuthor(authorResponse.data?.data.username);
    } catch (error) {
      console.error("Error fetching author:", error);
    }
  };

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex justify-center items-center h-fit py-20 md:py-10 md:min-h-screen p-6 sm:p-10 lg:p-20 lg:px-56">
      <div className="flex relative flex-col items-center gap-4 sm:gap-8 justify-center bcShadow rounded-xl p-6 sm:p-10 border-none outline-none">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl inria-sans-regular-italic">{blog.title}</h2>
        <p className="text-base sm:text-lg lg:text-xl inria-sans-regular mb-4 sm:mb-8">{blog.content}</p>
        <p className="absolute bottom-4 right-4 sm:right-10 text-sm sm:text-lg lg:text-xl inria-sans-regular2">-{author}</p>
      </div>
    </div>
  );
};

export default SinglePage;
