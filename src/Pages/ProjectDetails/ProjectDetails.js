import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import img1 from "../../assests/download (1).png";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import "./ProjectDetails.css";

const ProjectDetails = () => {
  let details = useLoaderData();
  console.log(details);
  // const { user } = useContext(AuthContext);

  // const handleDelete = (_id) => {
  //   const proceed = window.confirm("Are you sure to delete this ?");
  //   if (proceed) {
  //     fetch(`https://server-sharif101.vercel.app/allproject/${_id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           alert("Deleted Successfully");
  //         }
  //       });
  //   }
  // };
  return (
    <div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl ProjectDetails">
          <figure>
            <img src={details.img} alt="Album" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{details.name}</h2>
            <div>
              <p>{details.li1}</p>
              <p>{details.li2}</p>
              <p>{details.li3}</p>
            </div>
            <div>
              <p>{details.message}</p>
            </div>
            <div>
              <button className="button-17">
                <a href={details.live_link}>live view</a>
              </button>
            </div>
            {/* <div className="card-actions justify-end">
              {user?.uid ? (
                <button
                  className="button-17"
                  onClick={() => handleDelete(details._id)}
                >
                  Delete
                </button>
              ) : (
                <p></p>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
