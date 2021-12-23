import React, { useContext } from "react";
import HelperContext from "../../../contexts/HelperContext";
import { Link } from "react-router-dom";
import { API } from "../../../CONST";

const Item3 = ({ itemData }) => {
  let { handleAddCart } = useContext(HelperContext);

  return (
    <div className="">
      <div className="flex flex-col gap-y-2 items-center justify-center">
        <Link to={{ pathname: `/category/${itemData.id}` }} className="w-full">
          <img
            src={API + "/" + itemData.image}
            alt=""
            className="w-full object-contain max-h-40"
          />
        </Link>
        <Link to={{ pathname: `/category/${itemData.id}` }}>
          <h3 className="capitalize text-lg font-medium">{itemData.name}</h3>
        </Link>
      </div>
    </div>
  );
};

export default Item3;
