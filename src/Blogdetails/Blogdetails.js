import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Blogdetails = () => {
  let singleBlogdetails = useLoaderData();
  // const { id } = useParams();
  // console.log(id);
  return (
    <div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl ProjectDetails">
          {/* <figure>
            <img src={=} alt="Album" />
          </figure> */}
          <div className="card-body">
            <h2 className="card-title">{singleBlogdetails.BlogName}</h2>
            <div>
              <p>{singleBlogdetails.blogDescriptions}</p>
              <small>{singleBlogdetails.currentTime}</small>
            </div>
            {/* <div>
              <button className="button-17">
                <a href={details.live_link}>live view</a>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
