import React from "react";
import { API } from "../../../CONST";

const OrderItem = ({ itemData }) => {
  return (
    <div
      className={`p-2 border-l-4 ${
        itemData.delivered_date ? "" : "border-blue-500"
      } bg-gray-200 flex flex-col gap-y-2 rounded-md`}
    >
      {/* <div className="flex items-center gap-x-2">
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
      </div> */}
      <p className="text-gray-500 text-lg capitalize">
        الاجمالي: {itemData.total_price} . العنوان: {itemData?.User?.address}
      </p>
      <div className="bg-white px-4 rounded">
        {itemData?.Order_Products?.map((item) => (
          <div
            key={item.id}
            className="flex gap-x-2 items-center border-b py-4"
          >
            <img
              src={API + "/" + item.Product.image}
              alt=""
              className="w-20 h-20"
            />
            <div className="flex flex-col gap-y-2">
              <p className="text-gray-500 capitalize font-medium">
                {item.name}
              </p>
              <span className="text-gray-500 text-sm capitalize">
                السعر: {item.product_price} . الكمية: {item.quantity}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderItem;
