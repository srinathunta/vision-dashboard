import React from "react";
import { BiBuildings, BiDotsHorizontalRounded } from "react-icons/bi";

const CreditDetails = ({ card }) => {
  return (
    <div className="w-1/2 pl-2 flex flex-col justify-between">
      <div className="px-2 h-full flex flex-col justify-between bg-darkBlue rounded-xl">
        <div className="px-2 py-4">
          <div className="card bg-proGray rounded-xl p-4 mb-6 flex justify-between">
            <div className="">
              <p className="font-regular text-xs">Credit Balance</p>
              <p className="font-bold text-2xl">${card.balance}</p>
            </div>
            <div className="">
              <BiDotsHorizontalRounded />
            </div>
          </div>
          <div className="">
            <p className="text-xs opacity-70">Newest</p>
            <div className="flex justify-between">
              <span className="p-2 rounded-xl bg-lightBG text-progreen">
                <BiBuildings />
              </span>
              <p className="font-regular text-xs">
                Bill & Taxes
                <br />
                <span className="font-semibold text-xs opacity-70">
                  Today, 16:36
                </span>
              </p>
              <p className="font-semibold text-xs">-${card.bill}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditDetails;
