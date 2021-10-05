import React, { useContext } from "react";
import HelperContext from "../../../contexts/HelperContext";
import { Link } from "react-router-dom";

const Item = ({ itemData }) => {
  let { handleAddCart } = useContext(HelperContext);

  return (
    <div className="">
      <div className="flex flex-col gap-y-2 items-start justify-center">
        <Link to={`/product/${itemData.id}`} className="w-full">
          <img src={itemData.img} alt="" className="w-full object-cover" />
        </Link>
        <Link to={`/product/${itemData.id}`}>
          <h3 className="capitalize text-lg font-medium">{itemData.name}</h3>
        </Link>
        <div className="flex justify-between items-center w-full">
          <span className="text-xl font-light capitalize">
            price: ${itemData.price}
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
  );
};

export default Item;
