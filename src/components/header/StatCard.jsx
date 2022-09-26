import React from "react";

const StatCard = (props) => {
  return (
    <div className="pr-2 w-1/4">
      <div className="bg-darkBlue flex rounded-xl items-center justify-between p-2">
        <div className="">
          <p className="text-sm opacity-70">{props.title}</p>
          <p className="text-lg font-bold">
            {props.cont}
            <span
              className={`text-xs ${
                props.isGain ? "text-green-600" : "text-red-600"
              }`}
            >
              {props.isGain ? "+" : "-"}
              {props.diff}
            </span>
          </p>
        </div>
        <div className="p-2 bg-primBlue rounded-xl">{props.icon}</div>
      </div>
    </div>
  );
};

export default StatCard;
