import React from "react";
import { AiFillStar } from "react-icons/ai";
import CardBG from "../../assets/card-bg.jpg";

const DocCard = () => {
  return (
    <div
      style={{ backgroundImage: "url('" + CardBG + "" }}
      className="px-3 py-6 w-full rounded-xl bg-cover"
    >
      <div className="p-1 text-primBlue bg-white w-auto inline-block rounded">
        <AiFillStar />
      </div>
      <div className="py-2">
        <p className="text-lg">Need help?</p>
        <p className="text-sm">Please check our docs</p>
      </div>
      <a
        href="#"
        className="block w-full uppercase text-sm text-center bg-primary bg-opacity-75 rounded-xl px-4 py-1"
      >
        Documentation
      </a>
    </div>
  );
};

export default DocCard;
