import React from "react";
import ProductIMG from "../../assets/images/tableImage.jpg";

const SectionProductsTable = () => {
  let cartItems = [1, 2, 3];
  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="capitalize text-gray-500 border-b text-sm">
          <tr className="text-left">
            <th className="pb-2 w-20 h-20"></th>
            <th className="pb-2 w-6/12">product</th>
            <th className="pb-2">price</th>
            <th className="pb-2">quantity</th>
            <th className="pb-2">subtotal</th>
            <th className="pb-2 w-5"></th>
          </tr>
        </thead>
        <tbody className="">
          {cartItems.map((item, index) => (
            <tr
              className={`${index < cartItems.length - 1 ? "border-b" : ""}`}
              key={item}
            >
              <td className="py-2">
                <img src={ProductIMG} alt="" className="w-16 h-16" />
              </td>
              <td className="py-2 text-sm lg:text-base">
                All Natural Italian-Style Chicken Meatballs
              </td>
              <td className="py-2 font-medium text-gray-400 text-base">$20</td>
              <td className="py-2">
                <div className="flex items-center gap-x-2">
                  <button className="bg-gray-200 text-gray-600 rounded-full flex justify-center items-center w-7 h-7">
                    <i className="material-icons text-base">add</i>
                  </button>
                  <span className="text-gray-800 text-base">1</span>
                  <button className="bg-gray-200 text-gray-600 rounded-full flex justify-center items-center w-7 h-7">
                    <i className="material-icons text-base">remove</i>
                  </button>
                </div>
              </td>
              <td className="py-2 font-medium text-gray-400 text-base">$40</td>
              <td className="py-2">
                <button className="text-red-500 flex justify-center items-center">
                  <i className="material-icons text-base lg:text-xl">close</i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SectionProductsTable;
