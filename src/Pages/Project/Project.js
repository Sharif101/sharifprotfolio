import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import towtiers from "../../assests/Towtiers.png";
import "./Project.css";

const Project = ({ project }) => {
  let { name, li1, li2, live_link, message, li3, _id, img } = project;
  return (
    <div className="projects">
      <div className="card card-side shadow-xl bg-[#fffaf6]">
        <figure>
          {/* <img className="card-imgage" src={img} alt="Movie" /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">{li1}</span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">{li2}.</span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">{li3}</span>
          </p>
          <div className="card-actions justify-end">
            <Link to={`/projects/${_id}`}>
              <button className="button-17">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
