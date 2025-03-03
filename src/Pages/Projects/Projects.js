import React, { useEffect, useState } from "react";
import "./Projects.css";
// import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import towtiers from "../../assests/Towtiers.png";
import shutterup from "../../assests/Shutterup.png";
import studybuzz from "../../assests/Studybuzz.png";
import { useLoaderData } from "react-router-dom";
import Project from "../Project/Project";
import Allprojects from "../Dashboard/Allprojects/Allprojects";

const Projects = () => {
  let projects = useLoaderData();
  // console.log(projects);

  return (
    <div>
      <div className="projects">
        {projects.map((project) => (
          <Project project={project} key={project._id}></Project>
        ))}
      </div>

      {/* --------------------- */}
    </div>
  );
};

export default Projects;
