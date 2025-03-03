import React, { useEffect, useState } from "react";
import AllBlogs from "../AllBlogs/AllBlogs";

const Allblg = () => {
  let [blogsName, setBlogsName] = useState([]);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this ?");
    if (proceed) {
      fetch(`https://server-sharif101.vercel.app/allblogs/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("Deleted Successfully");
          }
        });
    }
  };

  useEffect(() => {
    fetch("https://server-sharif101.vercel.app/allblogs")
      .then((res) => res.json())
      .then((res) => setBlogsName(res));
  }, [blogsName]);
  return (
    <div>
      {blogsName.map((blogs) => (
        <AllBlogs
          blogs={blogs}
          key={blogs._id}
          handleDelete={handleDelete}
        ></AllBlogs>
      ))}
    </div>
  );
};

export default Allblg;
