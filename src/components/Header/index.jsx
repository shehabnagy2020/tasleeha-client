import React from "react";
import LogoIMG from "../../assets/images/logo.png";
import SectionAccount from "./SectionAccount";
import SectionBottom from "./SectionBottom";
import SectionCart from "./SectionCart";
import SectionSearch from "./SectionSearch";
import { Link } from "react-router-dom";
import SectionNotifications from "./SectionNotifications";

const Header = ({ noMarginBottom }) => {
  return (
    <div
      className="w-full flex flex-col justify-center border-b fixed z-10 bg-white"
      style={{ height: "10%" }}
    >
      <div className="flex justify-between items-center px-10">
        <Link to="/" className="flex-shrink-0">
          <img src={LogoIMG} alt="" className="w-40 lg:w-48" />
        </Link>
        <div className="flex gap-x-5 flex-grow justify-end">
          <div className="hidden lg:flex w-full gap-x-2">
            <SectionSearch />
            <SectionAccount />
            <Link
              to="/offers"
              className="flex items-center justify-center text-gray-400"
            >
              <div className="flex items-center justify-center">
                <i className="material-icons">whatshot</i>
              </div>
            </Link>
          </div>
          <SectionNotifications className="hidden lg:flex" />
          <SectionCart />
        </div>
      </div>
      <SectionBottom />
    </div>
  );
};

export default Header;
