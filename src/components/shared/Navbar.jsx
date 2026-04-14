import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <div className="shadow">
      <nav className="flex justify-between items-center gap-4 bg-white py-2 container mx-auto">
        <img src={logoImg} alt="" className="w-12.5" />
        <ul className="flex justify-between items-center gap-2">
          <li>
            {" "}
            <MyNavLink to={"/"}>Home</MyNavLink>
          </li>
          <li>
            {" "}
            <MyNavLink
              to={"/apps"}
              className={({ isActive }) =>
                `font-semibold pb-2  ${isActive ? "text-purple-500 border-b border-purple-500" : ""}`
              }
            >
              Apps
            </MyNavLink>
          </li>
          <li>
            {" "}
            <MyNavLink
              to={"/installedApps"}
              className={({ isActive }) =>
                `font-semibold pb-2  ${isActive ? "text-purple-500 border-b border-purple-500" : ""}`
              }
            >
              Installation
            </MyNavLink>
          </li>
        </ul>
        <button className="btn bg-purple-500 text-amber-50">
          {" "}
          <FaGithub />
          Contribute
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
