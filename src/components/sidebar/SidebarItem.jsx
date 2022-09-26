import React from "react";

const SidebarItem = (props) => {
  return (
    <div
      className={`${
        props.isActive
          ? "p-2 px-4 flex items-center rounded-xl group bg-lightBG"
          : "p-2 px-4 flex items-center rounded-xl group hover:bg-lightBG"
      }`}
    >
      <span
        className={`${
          props.isActive
            ? "p-2 rounded-xl text-white bg-primBlue"
            : "p-2 rounded-xl bg-lightBG text-primBlue group-hover:text-white group-hover:bg-primBlue"
        }`}
      >
        {props.icon}
      </span>

      <p className="text-white px-2">{props.title}</p>
    </div>
  );
};

export default SidebarItem;
