import React from "react";

const Footer = () => {
  return (
    <div className="">
      <div className="px-10 py-4 bg-gray-500">
        <div className="flex items-center justify-center">
          <span className="text-white font-bold text-sm capitalize">
            company © all rights reserved {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
