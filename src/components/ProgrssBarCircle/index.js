import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

export const GradientSVG = ({ startColor, stopColor, rotate, idnew }) => {
  let gradientTransform = `rotate(${rotate})`;
  return (
    <svg style={{ height: 0 }}>
      <defs>
        <linearGradient id={idnew} gradientTransform={gradientTransform}>
          <stop offset="2%" stopColor={startColor} />
          <stop offset="100%" stopColor={stopColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

const ProgressBarCircle = (props) => {
  const {
    pathColor,
    textColor,
    trailColor,
    rotate,
    backgroundColor,
    value,
    startColor,
    stopColor,
    idnew,
  } = props;
  return (
    <div className="progress-bar">
      <GradientSVG
        startColor={startColor}
        stopColor={stopColor}
        rotate={rotate}
        idnew={idnew}
      />

      <CircularProgressbarWithChildren
        value={value}
        className="bg-darkBlue rounded-full"
        styles={buildStyles({
          // Colors
          pathColor: { pathColor },
          textColor: { textColor },
          trailColor: "transparent",
          backgroundColor: { backgroundColor },
        })}
      >
        {props.children}
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default ProgressBarCircle;
