import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";

const SectionNotifications = ({ className }) => {
  let { notificationsItems, setIsNotification } = useContext(HelperContext);

  return (
    <button
      className={`flex flex-shrink-0 flex-col lg:flex-row justify-center items-center ${className}`}
      onClick={(_) => setIsNotification(true)}
    >
      <div className="relative">
        {/* {notificationsItems?.length >= 1 && (
          <div className="absolute" style={{ bottom: "60%", right: "60%" }}>
            <span className="bg-red-400 px-2 py-1 rounded-full text-white text-sm">
              {notificationsItems?.length}
            </span>
          </div>
        )} */}

        <div className="flex justify-center items-center text-gray-400">
          <span className="material-icons">notifications</span>
        </div>
      </div>
      <span className="lg:hidden text-gray-400 text-base ">الاشعارات</span>
    </button>
  );
};

export default SectionNotifications;
