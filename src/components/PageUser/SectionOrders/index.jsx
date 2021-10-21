import React, { useContext, useEffect, useState } from "react";
import OrderItem from "./OrderItem";
import { API } from "../../../CONST";
import Axios from "axios";
import UserContext from "../../../contexts/UserContext";

const SectionOrders = () => {
  const [loader, setLoader] = useState(false);
  const [ordersList, setOrdersList] = useState([]);
  const { userInfo } = useContext(UserContext);

  const getOrders = async () => {
    setLoader(true);
    try {
      const axiosReq = await new Axios({
        baseURL: API,
        url: "/api/orders/get",
        method: "GET",
        params: { user_id: userInfo.id },
      });
      console.log(axiosReq);
      setOrdersList([...axiosReq?.data?.data]);
      setLoader(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getOrders();
  }, []);

  // const ordersList = [
  //   {
  //     id: 1,
  //     address: "Egypt, cairo",
  //     total: 300,
  //     status: "dispatched",
  //     delivered_date: "",
  //     items: [
  //       {
  //         id: 1,
  //         img: "/static/media/item.d3a2431c.jpg",
  //         name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
  //         price: 50,
  //         quantity: 1,
  //         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
  //         totalQty: 10,
  //       },
  //       {
  //         id: 3,
  //         img: "/static/media/item.d3a2431c.jpg",
  //         name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
  //         price: 50,
  //         quantity: 1,
  //         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
  //         totalQty: 10,
  //       },
  //       {
  //         id: 2,
  //         img: "/static/media/item.d3a2431c.jpg",
  //         name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
  //         price: 50,
  //         quantity: 1,
  //         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
  //         totalQty: 10,
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     address: "Egypt, alexandria",
  //     total: 500,
  //     status: "deliverd",
  //     delivered_date: new Date(),
  //     items: [
  //       {
  //         id: 1,
  //         img: "/static/media/item.d3a2431c.jpg",
  //         name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
  //         price: 50,
  //         quantity: 1,
  //         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
  //         totalQty: 10,
  //       },
  //       {
  //         id: 3,
  //         img: "/static/media/item.d3a2431c.jpg",
  //         name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
  //         price: 50,
  //         quantity: 1,
  //         text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
  //         totalQty: 10,
  //       },
  //     ],
  //   },
  // ];

  return (
    <div className="w-full flex flex-col justify-start gap-y-5 mx-auto md:w-8/12 lg:w-2/3 xl:w-2/4">
      {ordersList?.length >= 1 ? (
        ordersList.map((item) => <OrderItem itemData={item} />)
      ) : (
        <div className="bg-gray-200 w-full p-5 text-center text-gray-500">
          لا توجد طلبات سابقة
        </div>
      )}
    </div>
  );
};

export default SectionOrders;
