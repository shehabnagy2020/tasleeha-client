import React from "react";

const Footer = () => {
  return (
    <div className="w-full" style={{ height: "8%" }}>
      <div className="flex items-center justify-center h-full border-t">
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
