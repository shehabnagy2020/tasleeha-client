import React, { useContext } from "react";
import HelperContext from "../../../contexts/HelperContext";
import { Link } from "react-router-dom";
import { API } from "../../../CONST";

const Item = ({ itemData }) => {
  let { handleAddCart } = useContext(HelperContext);

  return (
    <div className="">
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <Link
          to={{ pathname: `/product/${itemData.id}`, state: itemData }}
          className="w-full"
        >
          <img
            src={API + "/" + itemData.image}
            alt=""
            className="w-full object-contain max-h-40"
          />
        </Link>
        <Link to={{ pathname: `/product/${itemData.id}`, state: itemData }}>
          <h3 className="capitalize text-lg font-medium">{itemData.name}</h3>
        </Link>
        <div className="flex justify-between items-center w-full">
          <span className="text-xl font-light capitalize">
            السعر: {itemData.price}
          </span>
          <button
            onClick={(_) => handleAddCart(itemData)}
            className="text-white px-3 py-2 bg-blue-500 rounded-md font-bold capitalize"
          >
            اضف الي السله
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
