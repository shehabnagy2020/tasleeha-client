import React, { useState } from "react";
import SectionAccount from "./SectionAccount";
import SectionSearch from "./SectionSearch";
import { Link } from "react-router-dom";
import SectionNotifications from "./SectionNotifications";

const SectionBottom = () => {
  const [isSearch, setIsSearch] = useState(false);

  // useEffect(() => {
  //   let sticky = document.getElementById("sticky-bottom");
  //   let height = sticky.offsetHeight;
  //   document.getElementById("root").style.marginBottom = height + "px";
  // }, []);

  return (
    <div
      id="sticky-bottom"
      className="flex lg:hidden fixed w-screen z-10 h-20"
      style={{ bottom: "-2px", left: "0" }}
    >
      <div className="relative w-full">
        <div className="px-3 border-t bg-white w-full h-full flex justify-around items-center">
          <SectionNotifications />
          <Link
            to="/offers"
            className="flex flex-col items-center justify-center text-gray-400 text-base "
          >
            <div className="flex items-center justify-center">
              <i className="material-icons">whatshot</i>
            </div>
            <span className="capitalize">عروض</span>
          </Link>
          <div className="">
            <button
              className="flex flex-col items-center justify-center text-gray-400 text-base"
              onClick={(_) => setIsSearch((p) => !p)}
            >
              <div className="flex items-center justify-center">
                <i className="material-icons">search</i>
              </div>
              <span className="capitalize">بحث</span>
            </button>
            {isSearch && (
              <div
                className="absolute w-screen"
                style={{ bottom: "98%", left: "0" }}
              >
                <div className="flex items-center justify-center py-3 px-3 bg-white border-t">
                  <SectionSearch />
                </div>
              </div>
            )}
          </div>
          <SectionAccount />
        </div>
      </div>
    </div>
  );
};

export default SectionBottom;
