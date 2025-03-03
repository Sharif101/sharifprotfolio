import { async } from "@firebase/util";
import { createBrowserRouter } from "react-router-dom";
import Blogdetails from "../../Blogdetails/Blogdetails";
import Blogs from "../../Blogs/Blogs";
import Courselayout from "../../Layout/Courselayout";
import Main from "../../Layout/Main";
import Contact from "../../Pages/Contact/Contact";
import Addblogs from "../../Pages/Dashboard/Addblogs/Addblogs";
import Addproject from "../../Pages/Dashboard/Addproject/Addproject";
import Allblg from "../../Pages/Dashboard/Allblg/Allblg";
import AllPro from "../../Pages/Dashboard/AllPro/AllPro";
import Allprojects from "../../Pages/Dashboard/Allprojects/Allprojects";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import ProjectDetails from "../../Pages/ProjectDetails/ProjectDetails";
import Projects from "../../Pages/Projects/Projects";
import Singup from "../../Pages/Singup/Singup";
import Privateroute from "../Privateroute/Privateroute";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Courselayout></Courselayout>,
        children: [
          {
            path: "/dashboard",
            element: <Dashboard></Dashboard>,
          },
          {
            path: "/dashboard/addproject",
            element: <Addproject></Addproject>,
          },
          {
            path: "/dashboard/addblogs",
            element: <Addblogs></Addblogs>,
          },
          {
            path: "/dashboard/allprojectname",
            element: <AllPro></AllPro>,
          },
          {
            path: "/dashboard/allblogsname",
            element: <Allblg></Allblg>,
          },
        ],
      },
      {
        path: "/projects",
        loader: async ({ params }) => {
          return fetch("https://server-sharif101.vercel.app/allproject");
        },
        element: <Projects></Projects>,
      },
      {
        path: "/projects/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://server-sharif101.vercel.app/allproject/${params.id}`
          );
        },
        element: <ProjectDetails></ProjectDetails>,
      },
      {
        path: "/contact",
        // element: (
        //   <Privateroute>
        //     <Contact></Contact>
        //   </Privateroute>
        // ),
        element: <Contact></Contact>,
      },
      {
        path: "/blogs",
        loader: async ({ params }) => {
          return fetch("https://server-sharif101.vercel.app/allblogs");
        },
        element: <Blogs></Blogs>,
      },
      {
        path: "/blogs/:id",
        loader: async ({ params }) => {
          return fetch(
            `https://server-sharif101.vercel.app/allblogs/${params.id}`
          );
        },
        element: <Blogdetails></Blogdetails>,
      },
      {
        path: "/loginsharif369sharif",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <Singup></Singup>,
      },
    ],
  },
]);

export default router;
