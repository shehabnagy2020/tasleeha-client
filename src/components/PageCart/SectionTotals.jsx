import React, { useContext, useEffect } from "react";
import HelperContext from "../../contexts/HelperContext";
import UserContext from "../../contexts/UserContext";
import { Link } from "react-router-dom";

const SectionTotals = () => {
  let { cartItems, handleLocation, handleAddOrder, helperLoader } =
    useContext(HelperContext);
  let { userInfo } = useContext(UserContext);

  useEffect(() => {
    handleLocation();
  }, []);
  return (
    <div className="">
      <div className="border p-3">
        <h3 className="border-b pb-2 mb-3 uppercase text-lg font-bold">
          اجمالي السلة
        </h3>

        <div className="py-3 gap-y-3 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm capitalize font-semibold">المجموع</span>
            <span className="text-sm font-semibold text-gray-500">
              ${cartItems.total}
            </span>
          </div>

          <div className="flex flex-col w-full border-b pb-2">
            <div className="flex items-center justify-between">
              <span className="text-sm capitalize font-semibold">العنوان:</span>
              <button
                onClick={handleLocation}
                className="bg-blue-500 text-white rounded-full w-6 h-6 mx-2 flex justify-center items-center"
              >
                <i className="material-icons text-sm">location_on</i>
              </button>
            </div>
            <div className="flex w-full mt-2">
              <a
                target="_blank"
                href={`https://www.google.com/maps/@${cartItems.lat},${cartItems.long}`}
                className="text-blue-500"
              >
                عنوانك الحالي
              </a>
            </div>
          </div>

          <div className="flex items-center justify-between border-b pb-2">
            <span className="capitalize font-semibold text-xl">الاجمالي</span>
            <span className="font-semibold text-gray-500 text-xl">
              ${cartItems.total}
            </span>
          </div>

          {userInfo.full_name ? (
            helperLoader.addOrder ? (
              <div className="transition-all animate-pulse w-full text-center">
                <span className="material-icons text-blue-500 text-4xl">
                  pending
                </span>
              </div>
            ) : (
              <button
                onClick={handleAddOrder}
                className="p-3 rounded w-full capitalize bg-blue-500 outline-none text-white font-bold mt-2 text-center"
              >
                المتابعه للشراء
              </button>
            )
          ) : (
            <Link
              to="/login"
              className="p-3 rounded w-full capitalize bg-blue-500 outline-none text-white font-bold mt-2 text-center"
            >
              تسجيل الدخول للمتابعه
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionTotals;
