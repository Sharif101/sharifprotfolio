import React from "react";
import "./AllProjects.css";

const Allprojects = ({ project, handleDelete }) => {
  let { name, li1, li2, live_link, message, li3, _id } = project;
  console.log(project);
  return (
    <div className="all-rev">
      <div className="rev">
        <h6>Project Name: {name}</h6>
        <p></p>
      </div>
      <div className="rev-btn">
        {/* <Link to={`/updatereviews/${_id}`}> */}
        <button>edit</button>
        {/* </Link> */}
        <button onClick={() => handleDelete(_id)}>delete</button>
      </div>
    </div>
  );
};

export default Allprojects;
