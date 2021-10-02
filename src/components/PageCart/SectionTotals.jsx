import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";

const SectionTotals = () => {
  let { cartItems, handleLocation } = useContext(HelperContext);
  return (
    <div className="">
      <div className="border p-3">
        <h3 className="mb-3 uppercase text-lg font-bold">cart totals</h3>
        <div className="w-full bg-gray-400" style={{ height: "1px" }}></div>
        <div className="py-3 gap-y-3 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm capitalize font-semibold">subtotal</span>
            <span className="text-sm font-semibold text-gray-500">
              ${cartItems.total}
            </span>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm capitalize font-semibold">
                shipping:
              </span>
              <span className="text-sm font-semibold text-gray-500">
                ${cartItems?.shipping?.price}
              </span>
            </div>
            <div className="flex w-full mt-2">
              <span className="text-sm capitalize font-semibold">
                {cartItems?.shipping?.address}
              </span>
              <button
                onClick={handleLocation}
                className="bg-blue-500 text-white rounded-full w-6 h-6 mx-2 flex justify-center items-center"
              >
                <i className="material-icons text-sm">location_on</i>
              </button>
            </div>
          </div>

          <div className="w-full bg-gray-400" style={{ height: "1px" }}></div>

          <div className="flex items-center justify-between">
            <span className="capitalize font-semibold text-xl">total</span>
            <span className="font-semibold text-gray-500 text-xl">
              ${cartItems.total + cartItems.shipping.price}
            </span>
          </div>

          <div className="w-full bg-gray-400" style={{ height: "1px" }}></div>

          <button className="p-3 rounded w-full capitalize bg-blue-500 outline-none text-white font-bold mt-2">
            proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionTotals;
