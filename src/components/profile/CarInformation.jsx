import React from "react";

import "react-circular-progressbar/dist/styles.css";
import { GiElectric } from "react-icons/gi";
import { MdOutlineElectricCar } from "react-icons/md";
import { BsFillLightningChargeFill } from "react-icons/bs";
import ProgressBarCircle from "../ProgrssBarCircle";

const CarInformation = ({ name, car }) => {
  console.log(car);
  const { level, health, consumption, efficiency, week } = car;
  return (
    <div className="w-6/12 px-2 flex">
      <div className="p-4 w-full bg-gradient-to-br from-primary to-secondary rounded-xl">
        <div className="car-text mb-10">
          <p className="font-semibold text-lg">Car Information</p>
          <p className="font-regular text-sm opacity-70 mb-2">
            Hello, {name}! Your Car is ready.
          </p>
        </div>
        <div className="car-cond flex">
          <div className="load-car pr-2 w-1/3">
            <ProgressBarCircle
              idnew="car"
              value={level}
              pathColor="#05cd99"
              textColor="#fff"
              trailColor="#090c28"
              backgroundColor="#090c28"
              startColor="#090c28"
              stopColor="#05cd99"
              rotate="90"
            >
              <GiElectric className="text-progreen text-2xl" />
              <p className="font-bold text-4xl">{level}%</p>
              <p className="font-regular text-xs opacity-70">Current Load</p>
            </ProgressBarCircle>
            <div className="text-center mt-2">
              <p className="font-bold text-lg">0h 58 min</p>
              <p className="font-regular text-xs opacity-70">
                Time to full charge
              </p>
            </div>
          </div>
          <div className="w-1/3 pr-2 flex flex-col justify-between">
            <div className="bg-darkBlue rounded-xl px-2 h-20 flex justify-between items-center">
              <div className="">
                <p className="font-regular text-xs opacity-70">
                  Battery Health
                </p>
                <p className="font-bold text-lg">{health}%</p>
              </div>
              <div className="p-2 bg-primBlue rounded-lg">
                <MdOutlineElectricCar />
              </div>
            </div>
            <div className="bg-darkBlue rounded-xl px-2 h-20 flex justify-between items-center">
              <div className="">
                <p className="font-regular text-xs opacity-70">Consumption</p>
                <p className="font-bold text-lg">{consumption}W/km</p>
              </div>
              <div className="p-2 bg-primBlue rounded-lg">
                <BsFillLightningChargeFill />
              </div>
            </div>
          </div>
          <div className="w-1/3 pr-2 flex flex-col justify-between">
            <div className="bg-darkBlue rounded-xl px-2 h-20 flex justify-between items-center">
              <div className="">
                <p className="font-regular text-xs opacity-70">Efficiency</p>
                <p className="font-bold text-lg">{efficiency}%</p>
              </div>
              <div className=""></div>
            </div>
            <div className="bg-darkBlue rounded-xl px-2 h-20 flex justify-between items-center">
              <div className="">
                <p className="font-regular text-xs opacity-70">This Week</p>
                <p className="font-bold text-lg">{week}km</p>
              </div>
              <div className=""></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInformation;
