import React from "react";
import { Outlet } from "react-router-dom";
import Sidenav from "../Pages/Sidenav/Sidenav";

const Courselayout = () => {
  return (
    <div>
      <div className="container grid lg:grid-cols-4 sm:grid-cols-1 gap-x-7">
        <div>
          <Sidenav></Sidenav>
        </div>
        <div className="lg:col-span-3 my-7 sm:col-span-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Courselayout;
