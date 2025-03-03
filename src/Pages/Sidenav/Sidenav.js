import React from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <div>
      <div className="">
        {/* <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div> */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard/addproject">Add Project</Link>
            </li>
            <li>
              <Link to="/dashboard/addblogs">Add Blog</Link>
            </li>
            <li>
              <Link to="/dashboard/allprojectname">All projects</Link>
            </li>
            <li>
              <Link to="/dashboard/allblogsname">All blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
