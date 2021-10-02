import React from "react";

const SectionTotals = () => {
  return (
    <div className="">
      <div className="border p-3">
        <h3 className="mb-3 uppercase text-lg font-bold">cart totals</h3>
        <div className="w-full bg-gray-400" style={{ height: "1px" }}></div>
        <div className="py-3 gap-y-3 flex flex-col">
          <div className="flex items-center justify-between">
            <span className="text-sm capitalize font-semibold">subtotal</span>
            <span className="text-sm font-semibold text-gray-500">$20</span>
          </div>

          <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
              <span className="text-sm capitalize font-semibold">
                shipping:
              </span>
              <span className="text-sm font-semibold text-gray-500">$20</span>
            </div>
            <div className="flex w-full">
              <span className="text-sm capitalize font-semibold">my home</span>
              {/* <button className="text-blue-500 mx-3">
                <i className="material-icons">location</i>
              </button> */}
            </div>
          </div>

          <div className="w-full bg-gray-400" style={{ height: "1px" }}></div>

          <div className="flex items-center justify-between">
            <span className="capitalize font-semibold text-xl">total</span>
            <span className="font-semibold text-gray-500 text-xl">$20</span>
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
