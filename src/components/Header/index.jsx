import React, { useState } from "react";
import LogoIMG from "../../assets/images/logo.jpg";

const Header = () => {
  const [searchData, setSearchData] = useState("");

  return (
    <div className="pt-7">
      <div className="flex justify-between items-center flex-col lg:flex-row gap-y-5 lg:gap-y-0 ">
        <a href="/" className="flex-grow">
          <img src={LogoIMG} alt="" className="w-40 lg:w-48" />
        </a>
        <div className="flex justify-end gap-x-5 flex-grow items-center">
          <form className="flex items-center border bg-white rounded-full">
            <input
              type="search"
              name=""
              id=""
              placeholder="search..."
              onChange={(e) => setSearchData(e.target.value)}
              value={searchData}
              className="border-0 outline-none w-32 md:w-40 lg:w-60 mx-3"
            />
            <button
              type="submit"
              className="rounded-full p-3 flex items-center justify-center bg-blue-500 text-white"
            >
              <i className="material-icons">search</i>
            </button>
          </form>
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
      </div>
      <div className="w-full bg-gray-500 my-8" style={{ height: "1px" }}></div>
    </div>
  );
};

export default Header;
