import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";

const NotificationsModal = () => {
  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let { notificationsItems, isNotification, setIsNotification } =
    useContext(HelperContext);

  return (
    <div className={`${isNotification ? "block" : "hidden"} transition-all`}>
      <div className="fixed w-screen h-screen top-0 left-0 bg-black bg-opacity-50 z-10"></div>
      <div className="fixed w-screen h-screen top-0 left-0 overflow-auto z-20">
        <div className="mt-16 mb-28 lg:my-20">
          <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto p-5 rounded-lg bg-white overflow-auto">
            <div className="flex justify-between items-center  mb-10">
              <h1 className="font-bold text-gray-500 text-3xl">الاشعارات</h1>
              <button
                className="text-red-500"
                onClick={(_) => setIsNotification(false)}
              >
                <i className="material-icons">close</i>
              </button>
            </div>
            {notificationsItems.length >= 1 ? (
              <div className="flex flex-col items-center w-full gap-y-5 px-5 md:px-10">
                {notificationsItems.map((item, i) => (
                  <div
                    key={i}
                    className={`${
                      i < arr.length - 1 ? "border-b" : ""
                    } p-2 flex flex-col gap-y-2 text-gray-500`}
                  >
                    <span className="font-semibold text-xl">{item.title}</span>
                    <span className="font-light text-base">{item.body}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-gray-500 font-semibold">
                لا توجد اشعارات حاليا
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsModal;
