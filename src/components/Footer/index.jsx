import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="px-10 py-4 border-t">
        <div className="flex items-center justify-center">
          <span className="text-gray-400 font-bold text-sm capitalize">
            sovio © all rights reserved {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
