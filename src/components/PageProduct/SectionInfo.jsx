import React, { useContext } from "react";
import { API } from "../../CONST";
import HelperContext from "../../contexts/HelperContext";

const SectionInfo = ({ itemData, handleIncreaseQty, handleDecreaseQty }) => {
  let { handleAddCart } = useContext(HelperContext);

  return (
    <div className="pb-10">
      <div className="flex gap-y-8 items-center flex-col lg:flex-row lg:gap-x-10 lg:gap-y-0">
        <div className="w-4/5 lg:w-3/4">
          <img
            src={API + "/" + itemData.image}
            alt=""
            className="max-h-100 rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-3 items-center lg:items-start text-center lg:text-left flex-grow-0">
          <h3 className="capitalize text-2xl font-bold">{itemData.name}</h3>
          <div className="text-base font-normal">
            <div dangerouslySetInnerHTML={{ __html: itemData.description }} />
          </div>

          <div className="flex text-xl font-light capitalize gap-x-3">
            <span className="">price: ${itemData.price}</span>
            <span>.</span>
            <span className="">
              total: ${itemData.price * itemData.quantity}
            </span>
          </div>
          <div className="flex gap-x-5 items-center">
            <div className="flex items-center gap-x-3">
              <button
                onClick={(_) => handleIncreaseQty()}
                className="bg-gray-200 text-gray-600 rounded-full flex justify-center items-center w-7 h-7 md:w-10 md:h-10"
              >
                <i className="material-icons text-sm md:text-xl">add</i>
              </button>
              <span className="text-gray-800 text-lg">{itemData.quantity}</span>
              <button
                onClick={(_) => handleDecreaseQty()}
                className="bg-gray-200 text-gray-600 rounded-full flex justify-center items-center w-7 h-7 md:w-10 md:h-10"
              >
                <i className="material-icons text-sm md:text-xl">remove</i>
              </button>
            </div>
            <button
              onClick={(_) => handleAddCart(itemData)}
              className="rounded-lg text-white  capitalize bg-blue-500 border py-3 px-6"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
