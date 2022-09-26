import React from "react";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";
import User from "../dashboard/User";

const Information = ({ user }) => {
  return (
    <div className="w-3/12 pl-2 flex">
      <div className="p-4 w-full bg-darkBlue rounded-xl flex flex-col justify-between">
        <div className="">
          <p className="font-semibold text-lg">Profile Information</p>
          <p className="font-regular text-sm opacity-70 mb-2">{user.desc}</p>
        </div>
        <div className="profile-list">
          <p className="font-regular text-sm mb-2">
            <span className="opacity-70">Full Name:</span>
            <span className="font-regular text-sm"> {user.name}</span>
          </p>
          <p className="font-regular text-sm mb-2">
            <span className="opacity-70">Mobile:</span>
            <span className="font-regular text-sm"> {user.mobile}</span>
          </p>
          <p className="font-regular text-sm mb-2">
            <span className="opacity-70">Email:</span>
            <span className="font-regular text-sm"> {user.email}</span>
          </p>
          <p className="font-regular text-sm mb-2">
            <span className="opacity-70">Location:</span>
            <span className="font-regular text-sm"> {user.location}</span>
          </p>
          <p className="font-regular text-sm mb-2 flex items-center">
            <span className="opacity-70">Social:</span>
            <span className="font-regular text-sm flex">
              <a href="#" target="_blank" className="inline ml-2">
                <AiFillFacebook />
              </a>
              <a href="#" target="_blank" className="inline ml-2">
                <AiOutlineTwitter />
              </a>
              <a href="#" target="_blank" className="inline ml-2">
                <AiOutlineInstagram />
              </a>{" "}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Information;
