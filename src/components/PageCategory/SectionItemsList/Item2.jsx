import React from "react";

const Item2 = ({ itemData }) => {
  return (
    <div className="">
      <div className="flex gap-x-6 items-center justify-start">
        <img src={itemData.img} alt="" className="w-60 h-60 object-cover" />
        <div className="flex flex-col gap-y-2">
          <h3 className="capitalize text-lg font-medium">{itemData.name}</h3>
          <p className="">{itemData.text}</p>
          <span className="text-blue-500 font-bold">{itemData.price} $</span>
        </div>
      </div>
    </div>
  );
};

export default Item2;
