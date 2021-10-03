import React from "react";
import Moment from "moment";

const OrderItem = ({ itemData }) => {
  return (
    <div
      className={`p-2 border-l-4 ${
        itemData.delivered_date ? "" : "border-blue-500"
      } bg-gray-200 flex flex-col gap-y-2 rounded-md`}
    >
      <div className="flex items-center gap-x-2">
        {itemData.delivered_date ? (
          <span className="text-gray-500 capitalize font-medium">
            {itemData.status} at{" "}
            {Moment(itemData.delivered_date).format("D/mm/yyyy")}
          </span>
        ) : (
          <span className="text-gray-500 capitalize font-medium">
            {itemData.status}
          </span>
        )}
      </div>
      <p className="text-gray-500 text-lg capitalize">
        total: ${itemData.total} . address: {itemData.address}
      </p>
      <div className="bg-white px-4 rounded">
        {itemData.items.map((item) => (
          <div
            key={item.id}
            className="flex gap-x-2 items-center border-b py-4"
          >
            <img src={item.img} alt="" className="w-20 h-20" />
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-500 capitalize font-medium">
                {item.name}
              </p>
              <span className="text-gray-500 text-sm capitalize">
                price: ${item.price} . quantity: {item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItem;
