import React from "react";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { IoHome, IoStatsChartSharp, IoRocketSharp } from "react-icons/io5";
import { BsCreditCardFill, BsPersonFill } from "react-icons/bs";
import { IoIosDocument } from "react-icons/io";
import { FaWrench } from "react-icons/fa";
import SidebarItem from "./SidebarItem";
import DocCard from "./DocCard";

const Sidebar = ({ change, title }) => {
  return (
    <div className="container flex flex-col bg-transparent h-full p-2 text-white">
      <div className="menu-top">
        <div className="logo text-center flex p-4">
          <img src={Logo} className="mr-2" />
          <p className="uppercase">vision ui free</p>
        </div>
        <div className="menu pt-6">
          <Link onClick={() => change("Dashboard")} to="/">
            <SidebarItem
              isActive={title === "Dashboard" ? true : false}
              title="Dashboard"
              icon={<IoHome />}
            />
          </Link>
          <Link onClick={() => change("Tables")} to="/tables">
            <SidebarItem
              isActive={title === "Tables" ? true : false}
              title="Tables"
              icon={<IoStatsChartSharp />}
            />
          </Link>
          <Link onClick={() => change("Billing")} to="/billing">
            <SidebarItem
              isActive={title === "Billing" ? true : false}
              title="Billing"
              icon={<BsCreditCardFill />}
            />
          </Link>
          <Link onClick={() => change("RTL")} to="/rtl">
            <SidebarItem
              isActive={title === "RTL" ? true : false}
              title="RTL"
              icon={<FaWrench />}
            />
          </Link>
          <p className="p-2 uppercase font-semibold">Account Pages</p>
          <Link onClick={() => change("Profile")} to="/profile">
            <SidebarItem
              isActive={title === "Profile" ? true : false}
              title="Profile"
              icon={<BsPersonFill />}
            />
          </Link>
          <Link onClick={() => change("Sign In")} to="/signin">
            <SidebarItem
              isActive={title === "Sign In" ? true : false}
              title="SignIn"
              icon={<IoIosDocument />}
            />
          </Link>
          <Link onClick={() => change("Sign Up")} to="/signup">
            <SidebarItem
              isActive={title === "Sign Up" ? true : false}
              title="SignUp"
              icon={<IoRocketSharp />}
            />
          </Link>
        </div>
      </div>
      <div className="menu-bottom mt-10">
        <DocCard />
        <a
          className="block bg-gradient-to-r from-secBlue to-secondary text-center mb-5 py-2 rounded-xl mt-5 font-semibold"
          href="#"
        >
          Upgrade to PRO
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
