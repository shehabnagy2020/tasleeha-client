import React from "react";

const SectionCart = () => {
  return (
    <div className="flex items-center flex-shrink-0">
      <div className="hidden md:flex mr-1">
        <span className="text-sm text-gray-400 font-bold capitalize">
          0.00 $
        </span>
      </div>
      <div className="relative">
        <div className="absolute" style={{ bottom: "60%", left: "60%" }}>
          <span className="bg-red-400 px-2 py-1 rounded-full text-white text-sm">
            0
          </span>
        </div>
        <div className="flex justify-center items-center text-gray-400">
          <span className="material-icons">shopping_cart</span>
        </div>
      </div>
    </div>
  );
};

export default SectionCart;
