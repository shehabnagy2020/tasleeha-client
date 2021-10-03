import React from "react";
import OrderItem from "./OrderItem";

const SectionOrders = () => {
  const ordersList = [
    {
      id: 1,
      address: "Egypt, cairo",
      total: 300,
      status: "dispatched",
      delivered_date: "",
      items: [
        {
          id: 1,
          img: "/static/media/item.d3a2431c.jpg",
          name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
          price: 50,
          quantity: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
          totalQty: 10,
        },
        {
          id: 3,
          img: "/static/media/item.d3a2431c.jpg",
          name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
          price: 50,
          quantity: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
          totalQty: 10,
        },
        {
          id: 2,
          img: "/static/media/item.d3a2431c.jpg",
          name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
          price: 50,
          quantity: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
          totalQty: 10,
        },
      ],
    },
    {
      id: 2,
      address: "Egypt, alexandria",
      total: 500,
      status: "deliverd",
      delivered_date: new Date(),
      items: [
        {
          id: 1,
          img: "/static/media/item.d3a2431c.jpg",
          name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
          price: 50,
          quantity: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
          totalQty: 10,
        },
        {
          id: 3,
          img: "/static/media/item.d3a2431c.jpg",
          name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
          price: 50,
          quantity: 1,
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
          totalQty: 10,
        },
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col justify-start gap-y-5 mx-auto md:w-8/12 lg:w-6/12 xl:w-2/4">
      {ordersList.map((item) => (
        <OrderItem itemData={item} />
      ))}
    </div>
  );
};

export default SectionOrders;
