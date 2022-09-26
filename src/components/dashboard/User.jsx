import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import JellyBg from "../../assets/jelly.png";

const User = () => {
  return (
    <div
      className="w-5/12 p-2 bg-cover flex flex-col justify-between rounded-xl bg-gradient-to-br from-primary to-secondary"
      style={{ backgroundImage: "url('" + JellyBg + "" }}
    >
      <div className="welcome-text">
        <p className="font-regular text-sm opacity-70 ">Welcome back,</p>
        <p className="font-bold text-xl">Mark Johnson</p>
        <p className="font-regular text-sm opacity-70 ">
          Glad to see you again!
        </p>
        <p className="font-regular text-sm opacity-70">Ask me anything.</p>
      </div>
      <div className="block">
        <a href="#" className="">
          <div className="flex items-center">
            <p>Tap to record</p>
            <BsArrowRightShort />
          </div>
        </a>
      </div>
    </div>
  );
};

export default User;
