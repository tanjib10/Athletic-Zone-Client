import { CgProfile } from "react-icons/cg";
import {
  FaAddressBook,
  FaBahai,
  FaBolt,
  FaBook,
  FaFileSignature,
  FaHome,
  FaMale,
  FaPlus,
  FaSubscript,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#B6BBC4]">
        <h3 className="text-center text-2xl mt-8 font-bold"> Dashboard</h3>
        <ul className=" font-semi-bold menu p-8">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/appliedTrainers">
                  <FaAddressBook></FaAddressBook> Applied Trainers
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/trainers">
                  <FaBolt></FaBolt> All Trainers
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/subscribers">
                  <FaSubscript></FaSubscript> All Subscribers
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/slots">
                  <FaBook></FaBook> Manage Slots
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/members">
                  <FaMale></FaMale> Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/forums">
                  <FaPlus></FaPlus> Add New Forum
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/classes">
                  <FaPlus></FaPlus> Add New Class
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/activity">
                  <FaFileSignature></FaFileSignature> Activity Log
                </NavLink>
              </li>
              <li className="">
                <NavLink to="/dashboard/profile">
                  <CgProfile></CgProfile> Profile Settings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/recommended">
                  <FaBahai></FaBahai> Recommended Classes
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
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
