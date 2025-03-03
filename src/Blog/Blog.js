import React from "react";
import { Link } from "react-router-dom";
import "./Blog.css";

const Blog = ({ blog }) => {
  let { blogDescriptions, BlogName, _id, currentTime } = blog;
  return (
    <div>
      <div>
        <div className="card card-side shadow-xl bg-[#fffaf6]">
          <figure>
            {/* <img className="card-imgage" src={img} alt="Movie" /> */}
          </figure>
          <div className="card-body">
            <h2 className="card-title">{BlogName}</h2>
            <p className="text-xs">
              <span className="pl-1">
                {blogDescriptions.length > 90 ? (
                  <>
                    {blogDescriptions.substring(0, 90)}
                    <Link to={`/blogs/${_id}`} className="readmore">
                      Read More
                    </Link>
                  </>
                ) : (
                  blogDescriptions
                )}
              </span>
            </p>
            {/* <small>{currentTime}</small> */}
            {/* <div className="card-actions justify-end">
              <Link>
                <button className="button-17">View Details</button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
