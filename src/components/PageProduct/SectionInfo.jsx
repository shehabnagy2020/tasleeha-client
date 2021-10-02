import React, { useContext } from "react";
import HelperContext from "../../contexts/HelperContext";

const SectionInfo = ({ itemData }) => {
  let { handleAddCart } = useContext(HelperContext);

  return (
    <div className="pb-10">
      <div className="flex gap-y-8 items-center flex-col lg:flex-row lg:gap-x-10 lg:gap-y-0">
        <div className="w-4/5 lg:w-3/4">
          <img
            src={itemData.img}
            alt=""
            className="w-full max-h-100 rounded object-cover"
          />
        </div>
        <div className="flex flex-col gap-y-2 items-center lg:items-start text-center lg:text-left flex-grow-0">
          <h3 className="capitalize text-2xl font-bold">{itemData.name}</h3>
          <p className="text-lg font-medium">{itemData.text}</p>
          <span className="text-blue-500 font-bold text-2xl">
            {itemData.price} $
          </span>
          <button
            onClick={(_) => handleAddCart(itemData)}
            className="rounded-lg text-white  capitalize bg-blue-500 border py-3 px-6"
          >
            add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionInfo;
