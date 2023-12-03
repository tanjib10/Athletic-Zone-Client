import { CgProfile } from "react-icons/cg";
import { FaBahai, FaFileSignature, FaHome } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-[#B6BBC4]">
        <h3 className="text-center text-2xl mt-8 font-bold"> Dashboard</h3>
        <ul className=" font-semi-bold menu p-8">
          <li className="font-semibold">
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
