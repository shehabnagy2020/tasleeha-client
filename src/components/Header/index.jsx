import React from "react";
import LogoIMG from "../../assets/images/logo.jpg";
import SectionAccount from "./SectionAccount";
import SectionBottom from "./SectionBottom";
import SectionCart from "./SectionCart";
import SectionSearch from "./SectionSearch";
import { Link } from "react-router-dom";

const Header = ({ noMarginBottom }) => {
  return (
    <div
      className="w-full flex flex-col justify-center border-b"
      style={{ height: "10%" }}
    >
      <div className="flex justify-between items-center px-10">
        <Link to="/" className="flex-shrink-0">
          <img src={LogoIMG} alt="" className="w-40 lg:w-48" />
        </Link>
        <div className="flex gap-x-5 flex-grow justify-end">
          <div className="hidden lg:flex w-full gap-x-4">
            <SectionSearch />
            <SectionAccount />
          </div>
          <SectionCart />
        </div>
      </div>
      <SectionBottom />
    </div>
  );
};

export default Header;
