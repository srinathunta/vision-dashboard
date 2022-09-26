import React from "react";
import UsersChart from "../dashboard/UsersChart";
import SalesChart from "../salesChart";

const Rtl = () => {
  return (
    <div className="">
      <div className="mb-8">
        <p class="font-semibold text-lg">Sales Overview</p>
        <SalesChart />
      </div>
      <div className="">
        <p class="font-semibold text-lg">Active Users</p>
        <UsersChart />
      </div>
    </div>
  );
};

export default Rtl;
