import React from "react";
import StatCard from "./StatCard";
import {
  IoWalletSharp,
  IoDocumentTextOutline,
  IoCartSharp,
} from "react-icons/io5";
import { IoIosGlobe } from "react-icons/io";

const Stat = () => {
  return (
    <div className="flex justify-between mt-8">
      <StatCard
        title="Today's Money"
        cont="$53,000"
        isGain={true}
        diff="55%"
        icon={<IoWalletSharp />}
      />
      <StatCard
        title="Today's users"
        cont="2,300"
        isGain={true}
        diff="3%"
        icon={<IoIosGlobe />}
      />
      <StatCard
        title="New Client's"
        cont="+3462"
        isGain={false}
        diff="2%"
        icon={<IoDocumentTextOutline />}
      />
      <StatCard
        title="Todtal Sales"
        cont="$103,430"
        isGain={true}
        diff="5%"
        icon={<IoCartSharp />}
      />
    </div>
  );
};

export default Stat;
