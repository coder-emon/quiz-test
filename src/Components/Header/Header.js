import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navToggle = function () {
    document.getElementById("nav-content").classList.toggle("hidden");
  };
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-6 w-full z-10 top-0 mb-5">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <NavLink
            className="text-white no-underline hover:text-white hover:no-underline"
            to="/"
          >
            <span className="text-2xl pl-2">
              <i className="em em-grinning"></i> Quiz Test
            </span>
          </NavLink>
        </div>

        <div className="block lg:hidden">
          <button
            id="nav-toggle"
            onClick={navToggle}
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block py-2 px-4  text-red-400 no-underline"
                    : "inline-block py-2 px-4 text-white no-underline"
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block py-2 px-4  text-red-400 no-underline"
                    : "inline-block py-2 px-4 text-white no-underline"
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block py-2 px-4  text-red-400 no-underline"
                    : "inline-block py-2 px-4 text-white no-underline"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="mr-3">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "inline-block py-2 px-4  text-red-400 no-underline"
                    : "inline-block py-2 px-4 text-white no-underline"
                }
                to="/"
              >
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
