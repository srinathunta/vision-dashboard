import React from "react";
import { HiHome } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle, FaBell } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const TopNav = ({ title }) => {
  return (
    <div className="flex justify-between">
      <div className="items-center">
        <span className=" opacity-70">
          <HiHome className="mr-1 inline" /> / {title}
        </span>
        <div className="font-bold">{title}</div>
      </div>
      <div className="flex items-center px-10">
        <div className="px-2 py-1 inputbox flex items-center rounded-2xl border-solid border-2 border-white border-opacity-20">
          <AiOutlineSearch className="" />
          <input
            className="shadow bg-transparent border-0 appearance-none border-0 rounded w-full py-1 px-2 text-white-700 leading-tight focus:outline-none focus:shadow-outline"
            id="search"
            type="text"
            placeholder="Type here..."
          ></input>
        </div>
        <a href="#" className="ml-5">
          <div className="inputbox flex items-center">
            <FaUserCircle className="" />
            <p className="ml-1">Sign in</p>
          </div>
        </a>
        <div className="block ml-5">
          <a className="" href="#">
            <IoSettingsSharp />
          </a>
        </div>
        <div className="block ml-5">
          <a href="#">
            <FaBell />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
