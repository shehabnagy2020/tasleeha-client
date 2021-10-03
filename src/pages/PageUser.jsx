import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionSideMenu from "../components/PageUser/SectionSideMenu";
import SectionProfile from "../components/PageUser/SectionProfile";
import { Switch, Route, Redirect, useLocation } from "react-router-dom";
import SectionOrders from "../components/PageUser/SectionOrders";

const PageUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loc = useLocation();

  return (
    <div className="w-screen h-screen">
      <Header noMarginBottom={true} />
      <div className="flex w-full" style={{ height: "82%" }}>
        <SectionSideMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        <div
          className={`w-full flex flex-col p-5 overflow-y-auto ${
            isOpen ? "hidden md:flex" : ""
          }`}
        >
          <div className="flex items-center gap-x-3 mb-16">
            <button
              onClick={(_) => setIsOpen((p) => !p)}
              className="w-8 h-8 border text-gray-500 flex md:hidden justify-center items-center"
            >
              <i className="material-icons text-lg">menu</i>
            </button>
            <h2 className="text-gray-500 capitalize font-medium text-xl">
              {loc.pathname === "/user/profile" ? "profile" : "my orders"}
            </h2>
          </div>
          <Switch>
            <Route path="/user/profile" component={SectionProfile} />
            <Route path="/user/orders" component={SectionOrders} />
            <Redirect to="/user/profile" />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageUser;
