import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ProgressBarCircle from "../ProgrssBarCircle";

const Referal = () => {
  return (
    <div className="p-2 pb-8 w-4/12 flex flex-col justify-between rounded-xl bg-primary">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Referral Tracking</p>
        <span className="p-2 rounded-xl bg-lightBG text-primBlue hover:text-white hover:bg-primBlue">
          <HiOutlineDotsHorizontal />
        </span>
      </div>
      <div className="flex justify-between items-stretch">
        <div className="cards flex flex-col justify-between py-2 w-1/2 ">
          <div className="bg-primary p-2">
            <p className="font-regular text-sm opacity-70 ">Invited</p>
            <p className="font-bold text-lg">145 people</p>
          </div>
          <div className="bg-primary p-2">
            <p className="font-regular text-sm opacity-70 ">Bonus</p>
            <p className="font-bold text-lg">1,465</p>
          </div>
        </div>
        <div className="load-referral pr-2 w-1/2">
          <ProgressBarCircle
            idnew="referral"
            value="93"
            pathColor="#05cd99"
            textColor="#fff"
            trailColor="#090c28"
            backgroundColor="#090c28"
            startColor="#090c28"
            stopColor="#05cd99"
            rotate="90"
          >
            <p className="font-regular text-xs opacity-70">Safety</p>
            <p className="font-bold text-4xl">9.3</p>
            <p className="font-regular text-xs opacity-70">Total Score</p>
          </ProgressBarCircle>
        </div>
      </div>
    </div>
  );
};

export default Referal;
