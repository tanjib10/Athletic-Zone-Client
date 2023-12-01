import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
// import Banner from "../../Home/Banner/Banner";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged Out",
          text: "You have been successfully logged out!",
        });
      })
      .catch();
  };
  console.log(user);
  const navLinks = (
    <>
      <li className="pr-4">
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-xl"
              : isActive
              ? "active text-xl underline"
              : ""
          }
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="pr-4">
        <NavLink
          to="/gallery"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending  text-xl"
              : isActive
              ? "active text-xl underline"
              : ""
          }
        >
          Gallery
        </NavLink>
      </li>
      <li className="pr-4">
        <NavLink
          to="/trainer"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending  text-xl"
              : isActive
              ? "active text-xl underline"
              : ""
          }
        >
          Trainer
        </NavLink>
      </li>
      <li className="pr-4">
        <NavLink
          to="/classes"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending text-xl"
              : isActive
              ? "active text-xl  underline"
              : ""
          }
        >
          Classes
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-[#31304D] text-white bg-opacity-90">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-20 p-2 shadow bg-base-100 text-black rounded-box w-52">
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              className="w-4 lg:w-8"
              src="../../../../public/28542127_7459344.jpg"
              alt=""
            />
            Athletic Zone
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex items-center justify-center gap-2">
              <img className="w-8 rounded-full" src={user.photoURL} alt="" />
            </div>
          ) : (
            <img className="w-10 rounded-full" src="" />
          )}
          {user ? (
            <button
              onClick={handleSignOut}
              className="pl-2 btn-ghost text-sm lg:text-lg font-semibold"
            >
              Logout
            </button>
          ) : (
            <div>
              <Link to="/login">
                <button className="px-2 text-sm lg:text-lg font-semibold">
                  Login
                </button>
              </Link>{" "}
              /
              <Link to="/register">
                <button className="text-sm lg:text-lg pl-2 font-semibold">
                  Register
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
