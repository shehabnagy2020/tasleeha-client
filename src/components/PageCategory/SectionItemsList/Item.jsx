import React from "react";

const Item = ({ itemData }) => {
  return (
    <div className="">
      <a
        href={`/product/${itemData.id}`}
        className="flex flex-col gap-y-2 items-start justify-center"
      >
        <img src={itemData.img} alt="" className="w-full h-60 object-cover" />
        <h3 className="capitalize text-lg font-medium">{itemData.name}</h3>
        <span className="text-blue-500 font-bold">{itemData.price} $</span>
      </a>
    </div>
  );
};

export default Item;
