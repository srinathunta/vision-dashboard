import React from "react";
import ProgressBarCircle from "../ProgrssBarCircle";
import { CgSmileMouthOpen } from "react-icons/cg";

const Satisfaction = () => {
  return (
    <div className="px-2 w-3/12 flex">
      <div className="px-2 pt-2 pb-8 flex w-full flex-col rounded-xl bg-gradient-to-b from-primary to-secondary">
        <p className="font-bold text-lg">Satisfaction Rate</p>
        <p className="font-regular text-sm opacity-70 mb-2">
          From all projects
        </p>
        <div className="load-satisfaction pr-2 w-2/3 text-center m-auto">
          <ProgressBarCircle
            idnew="satisfaction"
            value="95"
            pathColor="#104da7"
            textColor="#fff"
            trailColor="#22234b"
            backgroundColor="transparent"
            startColor="#22234b"
            stopColor="#104da7"
            rotate="90"
          >
            <div className="p-2 -mt-8 bg-primBlue rounded-full">
              <CgSmileMouthOpen />
            </div>
          </ProgressBarCircle>
        </div>
        <div className="w-full flex text-center justify-between rounded-xl bg-primary p-2 -mt-14 relative z-999">
          <p className="font-regular text-sm opacity-70">0%</p>
          <div className="">
            <p className="font-regular text-3xl font-bold">95%</p>
            <p className="font-regular text-sm opacity-70">Based on Likes</p>
          </div>

          <p className="font-regular text-sm opacity-70">100%</p>
        </div>
      </div>
    </div>
  );
};

export default Satisfaction;
