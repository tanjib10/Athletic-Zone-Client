import { CgProfile } from "react-icons/cg";
import {
  FaAddressBook,
  FaBahai,
  FaBolt,
  FaFileSignature,
  FaHome,
  FaMale,
  FaPlus,
  FaSubscript,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <Helmet>
        <title>Athletic Zone | Dashboard</title>
      </Helmet>
      <div className="w-64 min-h-screen bg-[#B6BBC4]">
        <h3 className="text-center text-2xl mt-8 font-bold"> Dashboard</h3>
        <ul className=" font-semi-bold menu p-8">
          {isAdmin ? (
            <>
              <li className="mb-2">
                <NavLink to="/dashboard/trainers">
                  <FaBolt></FaBolt> All Trainers
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/subscribers">
                  <FaSubscript></FaSubscript> All Subscribers
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/members">
                  <FaMale></FaMale> Manage Members
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/forums">
                  <FaPlus></FaPlus> Add New Forum
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/classes">
                  <FaPlus></FaPlus> Add New Class
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/appliedTrainers">
                  <FaAddressBook></FaAddressBook> Applied Trainers
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="mb-2">
                <NavLink to="/dashboard/activity">
                  <FaFileSignature></FaFileSignature> Activity Log
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/profile">
                  <CgProfile></CgProfile> Profile Settings
                </NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/recommended">
                  <FaBahai></FaBahai> Recommended Classes
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li className="mb-2">
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
