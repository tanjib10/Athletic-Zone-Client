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
import Recommended from "../Pages/Dashboard/Recommended/Recommended";
import AllSubscribers from "../Pages/Dashboard/AllSubscribers/AllSubscribers";
import AllTrainers from "../Pages/Dashboard/AllTrainers/AllTrainers";
import AppliedTrainers from "../Pages/Dashboard/AppliedTrainers/AppliedTrainers";
import ManageMembers from "../Pages/Dashboard/ManageMembers/ManageMembers";
import AddNewForum from "../Pages/Dashboard/AddNewForum/AddNewForum";
import AddNewClass from "../Pages/Dashboard/AddNewClass/AddNewClass";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <BecomeTrainer></BecomeTrainer>
          </PrivateRoute>
        ),
      },
      {
        path: "/user-booked/:id",
        element: (
          <PrivateRoute>
            <Packages></Packages>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "activity",
        element: (
          <PrivateRoute>
            <Activity></Activity>
          </PrivateRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "recommended",
        element: (
          <PrivateRoute>
            <Recommended></Recommended>
          </PrivateRoute>
        ),
      },
      {
        path: "subscribers",
        element: (
          <PrivateRoute>
            <AllSubscribers></AllSubscribers>
          </PrivateRoute>
        ),
      },
      {
        path: "trainers",
        element: (
          <PrivateRoute>
            <AllTrainers></AllTrainers>
          </PrivateRoute>
        ),
      },
      {
        path: "appliedTrainers",
        element: (
          <PrivateRoute>
            <AppliedTrainers></AppliedTrainers>
          </PrivateRoute>
        ),
      },
      {
        path: "members",
        element: (
          <PrivateRoute>
            <ManageMembers></ManageMembers>
          </PrivateRoute>
        ),
      },
      {
        path: "forums",
        element: (
          <PrivateRoute>
            <AddNewForum></AddNewForum>
          </PrivateRoute>
        ),
      },
      {
        path: "classes",
        element: (
          <PrivateRoute>
            <AddNewClass></AddNewClass>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
