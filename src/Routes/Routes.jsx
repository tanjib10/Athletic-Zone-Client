import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Gallery from "../Pages/Gallery/Gallery";
// import TrainerSection from "../Pages/Trainers/Trainers";
import Trainers from "../Pages/Trainers/Trainers";
import TrainerDetails from "../Pages/Trainers/TrainerDetails";
import BecomeTrainer from "../Pages/Trainers/BecomeTrainer";
import Packages from "../Pages/Trainers/Packages";
import Classes from "../Pages/Classes/Classes";
import ClassDetails from "../Pages/Classes/ClassDetails";
import Forums from "../Pages/Forums/Forums";
import Dashboard from "../Layout/Dashboard";
import Activity from "../Pages/Dashboard/Activity/Activity";
import Profile from "../Pages/Dashboard/Profile/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/gallery",
        element: <Gallery></Gallery>,
      },

      {
        path: "/trainer",
        element: <Trainers></Trainers>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/forums",
        element: <Forums></Forums>,
      },
      {
        path: "/trainer/:id",
        element: <TrainerDetails></TrainerDetails>,
      },
      {
        path: "/classes/:id",
        element: <ClassDetails></ClassDetails>,
      },
      {
        path: "/becomeTrainer",
        element: <BecomeTrainer></BecomeTrainer>,
      },
      {
        path: "/user-booked/:id",
        element: <Packages></Packages>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "activity",
        element: <Activity></Activity>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);
