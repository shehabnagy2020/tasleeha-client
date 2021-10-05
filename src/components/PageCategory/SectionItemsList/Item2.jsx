import React, { useContext } from "react";
import HelperContext from "../../../contexts/HelperContext";

const Item2 = ({ itemData }) => {
  let { handleAddCart } = useContext(HelperContext);

  return (
    <div className="">
      <div className="flex gap-x-6 items-center justify-start">
        <a href={`/product/${itemData.id}`}>
          <img src={itemData.img} alt="" className="w-60 h-60 object-cover" />
        </a>
        <div href={`/product/${itemData.id}`} className="flex flex-col gap-y-2">
          <a href={`/product/${itemData.id}`}>
            <h3 className="capitalize text-lg font-medium">{itemData.name}</h3>
          </a>
          <p className="">{itemData.text}</p>
          <div className="flex justify-between items-center w-full">
            <span className="text-xl font-light capitalize">
              {itemData.price} $
            </span>
            <button
              onClick={(_) => handleAddCart(itemData)}
              className="text-white px-3 py-2 bg-blue-500 rounded-md font-bold capitalize"
            >
              add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item2;
