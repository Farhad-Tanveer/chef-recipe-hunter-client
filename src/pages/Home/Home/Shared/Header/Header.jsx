import React from "react";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-base-100  py-6 lg:px-16">
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
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
        <Link to="/">
          <a className="btn btn-ghost normal-case text-3xl font-mono">
            Foodism
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-mono">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user && (
          <div className="tooltip tooltip-left" data-tip={user.displayName}>
            <img
              src={user.photoURL}
              className="w-10 h-10 rounded-full border border-black "
            ></img>
          </div>
        )}

        {user ? (
          <button
            onClick={handleLogOut}
            className="btn btn-accent text-black ml-5"
            variant="dark"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="btn text-white" variant="dark">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
