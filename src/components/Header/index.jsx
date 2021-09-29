import React from "react";
import LogoIMG from "../../assets/images/logo.jpg";

const Header = () => {
  return (
    <div className="pt-7">
      <div className="flex justify-between items-center">
        <div className="">
          <img src={LogoIMG} alt="" className="" />
        </div>
        <div className="flex items-center gap-x-2">
          <div className="px-3 py-3 flex justify-center items-center text-white bg-blue-500 rounded-full">
            <span className="material-icons">shopping_cart</span>
          </div>
          <div className="flex-col hidden md:flex">
            <span className="text-base font-bold capitalize">my cart</span>
            <span className="text-sm font-bold capitalize">0.00 $</span>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-500 my-8" style={{ height: "1px" }}></div>
    </div>
  );
};

export default Header;
