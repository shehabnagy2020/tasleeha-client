import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";
import { Link } from "react-router-dom";

const NotificationsModal = () => {
  let { notificationsItems, isNotification, setIsNotification } =
    useContext(HelperContext);
  const handleClick = (e) => {
    e.stopPropagation();
    setIsNotification(false);
  };
  console.log(notificationsItems);
  return (
    <div
      className={`w-screen h-screen bg-black top-0 bg-opacity-50 left-0 z-10 ${
        isNotification ? "fixed" : "hidden"
      } transition-all`}
      onClick={handleClick}
    >
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="bg-white rounded-lg py-5 px-5 w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2">
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
                    i < notificationsItems.length - 1 ? "border-b" : ""
                  } p-2 flex flex-col gap-y-2 text-gray-500`}
                >
                  {item.Product?.id ? (
                    <Link to={`/product/${item.product_id}`}>
                      <span className="font-semibold text-xl">
                        {item.title}
                      </span>
                    </Link>
                  ) : (
                    <span className="font-semibold text-xl">{item.title}</span>
                  )}
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
  );
};

export default NotificationsModal;
