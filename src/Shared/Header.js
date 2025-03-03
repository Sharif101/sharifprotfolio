import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  let [username, setUsername] = useState(false);
  let handleSingout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };
  let menuitems = (
    <React.Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>

      <li>
        {" "}
        {user?.uid ? (
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        ) : (
          <Link className="hidden"></Link>
        )}
      </li>

      <li>
        {user?.photoURL && (
          <div className="nav-image">
            <img
              src=""
              alt=""
              onMouseEnter={() => setUsername(true)}
              onMouseLeave={() => setUsername(false)}
              className="acc-img"
            />
            <p className={username ? "visible showName" : "visible hideName"}>
              {user?.displayName}
            </p>
          </div>
        )}
      </li>

      <li>
        {" "}
        {user?.uid ? (
          <li>
            <button variant="info" onClick={handleSingout}>
              Log Out
            </button>
          </li>
        ) : (
          <Link to="/loginsharif369sharif" className="hidden">
            <button> Log in</button>
          </Link>
        )}
      </li>
    </React.Fragment>
  );
  return (
    <div className="bg-[#EFEAE6]">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuitems}
              {/* <li tabIndex={0}>
                <a className="justify-between">
                  Parent
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
          <Link className="btn btn-ghost uppercase text-xl">Sharif</Link>
        </div>
        <div className="navbar-center hidden lg:flex ml-auto">
          <ul className="menu menu-horizontal px-1">
            {menuitems}
            {/* submenu  */}
            {/* <li tabIndex={0}>
              <a>
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
