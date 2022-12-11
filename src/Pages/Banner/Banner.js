import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import me from "../../assests/me.jpg";
import pdf from "../../assests/Resume(sharif).pdf";
// import line from "../../assests/Untitled-1.png";
import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";

const banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={me}
            className="max-w-sm rounded-lg shadow-2xl w-full"
            alt=""
          />
          <div className="px-5">
            {/* ------------------typewritter---------------------- */}
            <div className="typewritter py-6">
              <span style={{ color: "#d1beaf", fontWeight: "bold" }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Welcome to my world!!", "I'm front-end developer"]}
                  loop={7}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            {/* ---------------------------------------- */}
            <h1 className="text-3xl font-bold uppercase text-[#969696]">
              Md Sharif
            </h1>
            <br />
            <h1 className="text-3xl font-bold uppercase halfname text-[#969696]">
              Patwary
            </h1>
            <p className="py-6">
              My comprehensive set of skills about HTML-5, CSS3, JavaScript,
              ReactJS, Firebase and knowledge about backend technology.
            </p>
            <div>
              <Link to="/contact">
                {" "}
                <button className="button-30">Lets Talk</button>
              </Link>
              <Link to={pdf} target="_blank">
                {" "}
                <button className="button-30">Resume</button>
              </Link>
            </div>
          </div>
          <div className="icons">
            <ul>
              <li>
                <Link>
                  <FaFacebook />
                </Link>
              </li>
              <li>
                <Link>
                  <FaLinkedin />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default banner;
