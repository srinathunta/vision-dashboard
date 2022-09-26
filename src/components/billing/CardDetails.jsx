import React from "react";
import { RiMastercardFill } from "react-icons/ri";
import CardBG from "../../assets/card-bg.jpg";

const CardDetails = ({ card }) => {
  return (
    <div
      className="w-1/2 flex flex-col rounded-xl backdrop-blur justify-between pr-2"
      style={{ backgroundImage: "url('" + CardBG + "" }}
    >
      <div className="py-4 px-6 h-full flex flex-col justify-between rounded-xl">
        <div className="flex justify-between items-center">
          <div className="font-bold">Vision UI</div>
          <div className="">
            <RiMastercardFill className="text-4xl" />
          </div>
        </div>
        <div className="">
          <p className="font-semibold">{card.number}</p>
          <div className="flex">
            <div className="pr-2">
              <p className="font-regular text-sm opacity-70 uppercase">
                valid thru
              </p>
              <p className="font-regular text-sm opacity-90 uppercase">
                {card.valid}
              </p>
            </div>
            <div className="pr-2">
              <p className="font-regular text-sm opacity-70 uppercase">cvv</p>
              <p className="font-regular text-sm opacity-90 uppercase">
                {card.cvv}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
