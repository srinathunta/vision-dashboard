import React from "react";
import SalesChart from "../salesChart";
import Referal from "./Referal";
import Satisfaction from "./Satisfaction";
import User from "./User";
import UsersChart from "./UsersChart";
import { IoWalletSharp, IoRocketSharp, IoCartSharp } from "react-icons/io5";
import { FaWrench } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="block">
      <div className="flex mb-5">
        <User />
        <Satisfaction />
        <Referal />
      </div>
      <div className="flex mt-5">
        <div className="SalesChart p-2 w-7/12 rounded-xl bg-gradient-to-r from-primary to-secondary mr-2">
          <p className="font-semibold text-lg">Sales Overview</p>
          <p className="font-regular text-sm mb-2">
            <span className="inline text-green-600 mr-1">+5% more</span>
            <span className="opacity-90">in 2021</span>
          </p>
          <div className="w-full mt-10">
            <SalesChart />
          </div>
        </div>
        <div className="UsersChart p-2 w-5/12 rounded-xl bg-gradient-to-r from-primary to-secondary ml-2">
          <UsersChart />
          <p className="font-semibold text-lg">Active Users</p>
          <p className="font-regular text-sm mb-2">
            <span className="inline text-green-600 mr-1">(+23)</span>
            <span className="opacity-90">than last week</span>
          </p>
          <div className="flex justify-between">
            <div className="w-1/4 flex items-center">
              <div className="p-2 mr-2 bg-primBlue rounded-xl">
                <IoWalletSharp />
              </div>
              <span className="font-regular text-sm mb-2 opacity-90">
                Users
              </span>
            </div>
            <div className="w-1/4 flex items-center">
              <div className="p-2 mr-2 bg-primBlue rounded-xl">
                <IoRocketSharp />
              </div>
              <span className="font-regular text-sm mb-2 opacity-90">
                Clicks
              </span>
            </div>
            <div className="w-1/4 flex items-center">
              <div className="p-2 mr-2 bg-primBlue rounded-xl">
                <IoCartSharp />
              </div>
              <span className="font-regular text-sm mb-2 opacity-90">
                Sales
              </span>
            </div>
            <div className="w-1/4 flex items-center">
              <div className="p-2 mr-2 bg-primBlue rounded-xl">
                <FaWrench />
              </div>
              <span className="font-regular text-sm mb-2 opacity-90">
                Items
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
