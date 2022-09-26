import React from "react";
import CarInformation from "./CarInformation";
import Information from "./Information";
import WelcomeCard from "./WelcomeCard";

const Profile = ({ user }) => {
  return (
    <div className="flex justify-between">
      <WelcomeCard name={user.name} />
      <CarInformation car={user.car[0]} name={user.name} />
      <Information user={user} />
    </div>
  );
};

export default Profile;
