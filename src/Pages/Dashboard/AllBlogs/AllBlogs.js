import React from "react";

const AllBlogs = ({ blogs, handleDelete }) => {
  let { BlogName, _id } = blogs;
  //   console.log(blogs);
  return (
    <div>
      <div className="all-rev">
        <div className="rev">
          <h6>Project Name: {BlogName}</h6>
          <p></p>
        </div>
        <div className="rev-btn">
          {/* <Link to={`/updatereviews/${_id}`}> */}
          <button>edit</button>
          {/* </Link> */}
          <button onClick={() => handleDelete(_id)}>delete</button>
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
