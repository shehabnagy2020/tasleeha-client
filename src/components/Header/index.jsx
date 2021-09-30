import React from "react";
import LogoIMG from "../../assets/images/logo.jpg";
import SectionAccount from "./SectionAccount";
import SectionBottom from "./SectionBottom";
import SectionCart from "./SectionCart";
import SectionSearch from "./SectionSearch";

const Header = () => {
  return (
    <div className="pt-7">
      <div className="flex justify-between items-center px-10">
        <a href="/" className="flex-shrink-0">
          <img src={LogoIMG} alt="" className="w-40 lg:w-48" />
        </a>
        <div className="flex gap-x-5 flex-grow justify-end">
          {/* <form className="flex items-center border bg-white rounded-full">
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
          </form> */}
          <div className="hidden lg:flex w-full gap-x-4">
            <SectionSearch />
            <SectionAccount />
          </div>
          <SectionCart />
        </div>
      </div>
      <div className="w-full bg-gray-500 my-8" style={{ height: "1px" }}></div>
      <SectionBottom />
    </div>
  );
};

export default Header;
