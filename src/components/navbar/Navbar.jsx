import React, { useState } from "react";
import Logo from "../svgs/Logo";
import { CiHome, CiCamera, CiImageOn } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="fixed top-0 left-0 z-20 hidden w-64 h-full lg:flex lg:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-1 h-0 bg-black border-r border-gray-900">
          <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
            <div className="ml-3 text-xl font-medium text-purple-500 cursor-pointer">
              🚀 <span>Know Your Universe</span>
            </div>
            <nav className="flex-1 mt-5">
              <ul className="cursor-pointer">
                <div className="px-2 space-y-1">
                  <li
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md hover:text-primary ${
                      !active ? "text-purple-400" : "text-white"
                    }`}
                  >
                    <Link to={"/"} className="flex items-center">
                      {" "}
                      <CiHome className="flex-shrink-0 w-6 h-6 mr-3" />
                      Home
                    </Link>
                  </li>
                </div>
                <div className="px-2 space-y-1">
                  <li
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md hover:text-primary ${
                      !active ? "text-purple-400" : "text-white"
                    }`}
                  >
                    <Link to={"/images"} className="flex items-center">
                      {" "}
                      <CiImageOn className="flex-shrink-0 w-6 h-6 mr-3" /> Image
                      Library
                    </Link>
                  </li>
                </div>
                <div className="px-2 space-y-1">
                  <li
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md hover:text-primary ${
                      !active ? "text-purple-400" : "text-white"
                    }`}
                  >
                    <Link to={"/apod"} className="flex items-center">
                      {" "}
                      <CiCamera className="flex-shrink-0 w-6 h-6 mr-3" />{" "}
                      Astronomy picture of the day
                    </Link>
                  </li>
                </div>
                <hr className="my-5 border-t border-gray-900" />
                <div className="px-2 space-y-1">
                  <li
                    className={`flex items-center px-2 py-2 text-sm font-medium rounded-md hover:text-primary ${
                      !active ? "text-purple-400" : "text-white"
                    }`}
                  >
                    <FiGithub className="flex-shrink-0 w-6 h-6 mr-3" />
                    Github
                  </li>
                </div>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
