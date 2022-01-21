import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

const SectionSideMenu = ({ setIsOpen, isOpen }) => {
  const { userInfo, handleLogout } = useContext(UserContext);

  return (
    <div
      className={`w-full md:w-2/6 lg:w-4/12 xl:w-1/4 h-full border-l justify-center ${
        isOpen ? "" : "hidden md:flex"
      }`}
    >
      <button
        onClick={(_) => setIsOpen((p) => !p)}
        className="w-8 h-8 border text-gray-500 m-5 mb-0 flex md:hidden justify-center items-center"
      >
        <i className="material-icons text-lg">menu</i>
      </button>
      <div className="flex flex-col items-center p-5 h-full justify-around">
        <div className="flex flex-col items-center justify-center gap-y-3 mb-5 ">
          <div className="rounded-full border bg-white p-1 flex justify-center items-center">
            <i className="material-icons text-6xl text-gray-500">
              account_circle
            </i>
          </div>
          <h3 className="capitalize text-base text-center lg:text-xl text-gray-500 font-bold">
            {userInfo.full_name}
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-5 mb-14">
          <NavLink
            to="/user/profile"
            className="flex items-center gap-x-2 text-gray-500"
            activeClassName="text-blue-500"
          >
            <i className="material-icons ">manage_accounts</i>
            <span className=" capitalize">الحساب</span>
          </NavLink>
          <NavLink
            to="/user/orders"
            className="flex items-center gap-x-2 text-gray-500"
            activeClassName="text-blue-500"
          >
            <i className="material-icons">receipt</i>
            <span className="capitalize">الطلبات</span>
          </NavLink>
        </div>
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={handleLogout}
            className="rounded-full border bg-white w-14 h-14 flex justify-center items-center"
          >
            <i className="material-icons text-3xl text-gray-500">logout</i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionSideMenu;
