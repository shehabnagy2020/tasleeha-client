import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";
import { Link } from "react-router-dom";
import { API } from "../../CONST";

const SectionProductsTable = () => {
  let { cartItems, handleDecreaseQty, handleDelete, handleIncreaseQty } =
    useContext(HelperContext);

  return (
    <div className="w-full">
      <table className="w-full">
        <thead className="capitalize text-gray-500 border-b text-base lg:text-sm">
          <tr className="text-right">
            <th className="p-2 w-20 h-20 hidden md:flex"></th>
            <th className="p-2 w-5/12 md:w-6/12">المنتج</th>
            <th className="p-2">السعر</th>
            <th className="p-2">الكمية</th>
            <th className="p-2">الاجمالي</th>
            <th className="p-2 w-5"></th>
          </tr>
        </thead>
        <tbody className="">
          {cartItems.products.map((item, index) => (
            <tr
              className={`${
                index < cartItems.products.length - 1 ? "border-b" : ""
              } text-base lg:text-lg`}
              key={item.id}
            >
              <td className="p-2 hidden md:flex">
                <Link to={`/product/${item.id}`}>
                  <img
                    src={API + "/" + item.image}
                    alt=""
                    className="w-16 h-16"
                  />
                </Link>
              </td>
              <td className="p-2">
                <Link to={`/product/${item.id}`}>{item.name}</Link>
              </td>
              <td className="p-2 font-medium text-gray-400 text-base">
                ${item.price}
              </td>
              <td className="p-2">
                <div className="flex items-center gap-x-2">
                  <button
                    onClick={(_) => handleIncreaseQty(index)}
                    className="bg-gray-200 text-gray-600 rounded-full flex justify-center items-center w-5 h-5 md:w-7 md:h-7"
                  >
                    <i className="material-icons text-sm md:text-base">add</i>
                  </button>
                  <span className="text-gray-800 text-base">
                    {item.quantity}
                  </span>
                  <button
                    onClick={(_) => handleDecreaseQty(index)}
                    className="bg-gray-200 text-gray-600 rounded-full flex justify-center items-center w-5 h-5 md:w-7 md:h-7"
                  >
                    <i className="material-icons text-base">remove</i>
                  </button>
                </div>
              </td>
              <td className="p-2 font-medium text-gray-400 text-base">
                ${item.quantity * item.price}
              </td>
              <td className="p-2">
                <button
                  onClick={(_) => handleDelete(index)}
                  className="text-red-500 flex justify-center items-center"
                >
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
