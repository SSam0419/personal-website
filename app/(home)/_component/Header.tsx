import React from "react";

const Header = ({ headerText }: { headerText: string }) => {
  return (
    <div className="py-5 flex justify-between items-center">
      <div className="border-b-2 border-b-black flex-1"></div>
      <p className="text-center text-3xl flex-1">{headerText}</p>
      <div className="border-b-2 border-b-black flex-1"></div>
    </div>
  );
};

export default Header;
