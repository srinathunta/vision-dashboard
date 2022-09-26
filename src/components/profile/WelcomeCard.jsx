import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import CardBg from "../../assets/background--blue-waves.jpg";

const WelcomeCard = (props) => {
  return (
    <div className="w-3/12 pr-2 flex">
      <div
        className="w-full bg-cover welcome-card flex flex-col p-4 justify-between bg-darkBlue rounded-xl"
        style={{ backgroundImage: "url('" + CardBg + "" }}
      >
        <div className="welcome-text">
          <p className="font-bold text-xl">Welcome back!</p>
          <p className="font-regular text-sm opacity-70 mb-2">
            Nice to meet you, {props.name}!
          </p>
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
    </div>
  );
};

export default WelcomeCard;
