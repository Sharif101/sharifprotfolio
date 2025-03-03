import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import me from "../../assests/me.jpg";
import pdf from "../../assests/Resume(sharif).pdf";
// import line from "../../assests/Untitled-1.png";
import "./Banner.css";
import { Typewriter } from "react-simple-typewriter";

const banner = () => {
  let a = "{";
  let b = "}";
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
                <a href="https://www.linkedin.com/in/md-sharif-patwary-0508861a0/">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="https://github.com/Sharif101">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------------
      ------------------------------------------------------------- */}

      <div className="mb-20 about">
        <div className="mockup-code about_code">
          {/* -------1st----------- */}
          <pre data-prefix="$">
            <code>About //</code>
          </pre>
          {/* _____2nd line_______ */}
          <pre data-prefix=">">
            <code>
              <span style={{ color: "#4d4dff" }}>class</span>{" "}
              <span style={{ color: "#eeff31" }}>Sharif Patwary</span>{" "}
              <span>{a}</span>
            </code>
          </pre>
          {/* ---3rd line--- */}
          <pre data-prefix=" ">
            <code className="ml-5">
              <span style={{ color: "#4d4dff" }}>constructor</span>{" "}
              <span>()</span>
              <span>{a}</span>
            </code>
          </pre>
          {/* ---4th line--- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: "#b32400" }}>this</span>.
              <span style={{ color: "#24e394" }}>name</span>{" "}
              <span style={{ color: "#b32400" }}>=</span>{" "}
              <span style={{ color: "#24e33a" }}>'Md Sharif Patwary'</span>
            </code>
          </pre>
          {/* ---5th line--- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: "#b32400" }}>this</span>.
              <span style={{ color: "#24e394" }}>phoneNo</span>{" "}
              <span style={{ color: "#b32400" }}>=</span>{" "}
              <span style={{ color: " #e39d24" }}>01705544110</span>
            </code>
          </pre>
          {/* ---6th line--- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: "#b32400" }}>this</span>.
              <span style={{ color: "#24e394" }}>email</span>{" "}
              <span style={{ color: "#b32400" }}>=</span>{" "}
              <span style={{ color: " #24e33a" }}>
                "sharif009009@gmail.com"
              </span>
            </code>
          </pre>
          {/* -----7th line----- */}
          <pre data-prefix=" ">
            <code className="ml-5">
              <span>{b}</span>
            </code>
          </pre>
          {/* ---8th line--- */}
          <pre data-prefix=" ">
            <code className="ml-5">
              <span style={{ color: "#eeff31" }}>education</span>{" "}
              <span>()</span>
              <span>{a}</span>
            </code>
          </pre>
          {/* -------9th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: "	 #4d4dff" }}>return</span> <span>[</span>
            </code>
          </pre>

          {/* -------10th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-14">
              <span>{a}</span>{" "}
              <span style={{ color: " #24e33a" }}>
                'Cse at Daffodil International University 3.39 out of 4.00 (2019
                - 2022)'
              </span>{" "}
              <span>{b}</span>
            </code>
          </pre>
          {/* -------11th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-14">
              <span>{a}</span>{" "}
              <span style={{ color: " #24e33a" }}>
                'HSC at Dhaka Imperial college 3.83 out of 5.00 (2016 - 2018)'
              </span>{" "}
              <span>{b}</span>
            </code>
          </pre>
          {/* -------12th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-14">
              <span>{a}</span>{" "}
              <span style={{ color: " #24e33a" }}>
                'SSC at Hajee Moazzem Ali High School 4.67 out of 5.00 (2014 -
                2016)'
              </span>{" "}
              <span>{b}</span>
            </code>
          </pre>

          {/* -----13 line----- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span>]</span>
            </code>
          </pre>
          {/* -----14 line----- */}
          <pre data-prefix=" ">
            <code className="ml-5">
              <span>{b}</span>
            </code>
          </pre>

          {/* ---15th line--- */}
          <pre data-prefix=" ">
            <code className="ml-5">
              <span style={{ color: "#eeff31" }}>skills</span> <span>()</span>
              <span>{a}</span>
            </code>
          </pre>
          {/* -------16th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: "	 #4d4dff" }}>return</span> <span>[ </span>{" "}
              <span style={{ color: " #24e33a" }}>
                'HTML-5', 'CSS3', 'Bootstrap', 'Tailwind CSS',
              </span>
            </code>
          </pre>
          {/* -------17th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: " #24e33a" }}>
                'JavaScript', 'React JS', 'C Programming', 'Problem solving'
              </span>
            </code>
          </pre>
          {/* -------18th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: " #24e33a" }}>
                'Express.js', 'MongoDB', 'Firebase', 'Chrome Dev tools'
              </span>
            </code>
          </pre>
          {/* -------19th line--------- */}
          <pre data-prefix=" ">
            <code className="ml-10">
              <span style={{ color: " #24e33a" }}>'Node.js'</span>{" "}
              <span>]</span>
            </code>
          </pre>
          {/* -----20 line----- */}
          <pre data-prefix=" ">
            <code className="ml-5">
              <span>{b}</span>
            </code>
          </pre>
          {/* ------------ */}
          <pre data-prefix=" ">
            <code>
              <span>{b}</span>
            </code>
          </pre>
          {/* ------------ */}
          <pre data-prefix=">" className="text-success">
            <code>Done!</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default banner;
