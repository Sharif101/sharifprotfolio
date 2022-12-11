import React from "react";
import "./Projects.css";
// import { FaArrowRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import towtiers from "../../assests/Towtiers.png";
import shutterup from "../../assests/Shutterup.png";
import studybuzz from "../../assests/Studybuzz.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="card card-side shadow-xl bg-[#fffaf6]">
        <figure>
          <img className="card-imgage" src={towtiers} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Two Tiers</h2>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              User can login or sign up with Authentication
            </span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              Seller can add a service and see his products.
            </span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              Admin see all seller all buyer and reported items.
            </span>
          </p>
          <div className="card-actions justify-end">
            <a href="https://resale-app-9e5c4.web.app/">
              <button className="button-17">View site</button>
            </a>
          </div>
        </div>
      </div>
      {/* ..................  */}
      <div className="card card-side bg-[#fffaf6] shadow-xl">
        <figure>
          <img className="card-imgage" src={shutterup} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shutter up</h2>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              User can login or sign up with Authentication
            </span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              User can add a service then this adds in service route
            </span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              User see his all comment and they can edit or delete his comments.
            </span>
          </p>
          <div className="card-actions justify-end">
            <a href="https://shutter-up-f2c91.web.app/">
              <button className="button-17">View site</button>
            </a>
          </div>
        </div>
      </div>

      {/* ..................  */}
      <div className="card card-side bg-[#fffaf6] shadow-xl">
        <figure>
          <img className="card-imgage" src={studybuzz} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Studybuzz</h2>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              User can login or sign up with Authentication
            </span>
          </p>
          <p className="text-xs">
            <FontAwesomeIcon className="text-[#EB427C]" icon={faArrowRight} />
            <span className="pl-1">
              User can see all courses if user want premium must be login this
              site
            </span>
          </p>
          <div className="card-actions justify-end">
            <a href="https://courses-34523.web.app/">
              <button className="button-17">View site</button>
            </a>
          </div>
        </div>
      </div>

      {/* ----------------------- */}
    </div>
  );
};

export default Projects;
