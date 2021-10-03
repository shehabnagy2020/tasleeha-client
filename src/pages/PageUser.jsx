import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionSideMenu from "../components/PageUser/SectionSideMenu";
import SectionProfile from "../components/PageUser/SectionProfile";
import { Switch, Route, Redirect } from "react-router-dom";

const PageUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-screen h-screen">
      <Header noMarginBottom={true} />
      <div className="flex w-full" style={{ height: "82%" }}>
        <SectionSideMenu setIsOpen={setIsOpen} isOpen={isOpen} />
        <div
          className={`w-full flex flex-col p-5 ${
            isOpen ? "hidden md:flex" : ""
          }`}
        >
          <div className="flex items-center gap-x-3 mb-20">
            <button
              onClick={(_) => setIsOpen((p) => !p)}
              className="w-8 h-8 border text-gray-500 flex md:hidden justify-center items-center"
            >
              <i className="material-icons text-lg">menu</i>
            </button>
            <h2 className="text-gray-500 capitalize font-medium text-xl">
              profile
            </h2>
          </div>
          <Switch>
            <Route path="/user/profile" component={SectionProfile} />
            <Redirect to="/user/profile" />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageUser;
