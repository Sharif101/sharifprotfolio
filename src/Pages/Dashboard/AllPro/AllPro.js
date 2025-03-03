import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import Allprojects from "../Allprojects/Allprojects";

const AllPro = () => {
  let [projectName, setprojectName] = useState([]);

  const { user } = useContext(AuthContext);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure to delete this ?");
    if (proceed) {
      fetch(`https://server-sharif101.vercel.app/allproject/${_id}`, {
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
    fetch("https://server-sharif101.vercel.app/allproject")
      .then((res) => res.json())
      .then((res) => setprojectName(res));
  }, [projectName]);
  return (
    <div>
      <div>
        {projectName.map((project) => (
          <Allprojects
            project={project}
            handleDelete={handleDelete}
            key={project._id}
          ></Allprojects>
        ))}
      </div>
    </div>
  );
};

export default AllPro;
