import React from "react";
import Stat from "./Stat";
import TopNav from "./TopNav";

const Header = ({ title }) => {
  return (
    <div className="py-4">
      <TopNav title={title} />
      <Stat />
    </div>
  );
};

export default Header;
