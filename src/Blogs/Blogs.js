import React from "react";
import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";

const Blogs = () => {
  let blogs = useLoaderData();
  // console.log(blogs);
  return (
    <div>
      <div className="blogs">
        {blogs.map((blog) => (
          <Blog blog={blog} key={blog._id}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
