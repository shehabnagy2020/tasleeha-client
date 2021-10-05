import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionInfo from "../components/PageProduct/SectionInfo";
import ItemIMG from "../assets/images/item.jpg";
import SectionSimilarPro from "../components/PageProduct/SectionSimilarPro";
import SectionPagintation from "../components/Common/SectionPagintation";
import { useParams } from "react-router-dom";

const PageProduct = () => {
  const { product_id } = useParams();

  const [itemData, setItemData] = useState({
    id: 1,
    img: ItemIMG,
    name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
    price: 50,
    totalQty: 10,
    quantity: 1,
  });
  const [itemsList] = useState([
    {
      id: 1,
      img: ItemIMG,
      name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 50,
    },
    {
      id: 2,
      img: ItemIMG,
      name: "qsjssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 5,
    },
    {
      id: 3,
      img: ItemIMG,
      name: "fjssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 20,
    },
    {
      id: 4,
      img: ItemIMG,
      name: "rssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 10,
    },
    {
      id: 5,
      img: ItemIMG,
      name: "zjssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 2,
    },
    {
      id: 6,
      img: ItemIMG,
      name: "njssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 90,
    },
    {
      id: 7,
      img: ItemIMG,
      name: "yjssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 100,
    },
    {
      id: 8,
      img: ItemIMG,
      name: "tjssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 7,
    },
    {
      id: 9,
      img: ItemIMG,
      name: "ojssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 30,
    },
    {
      id: 10,
      img: ItemIMG,
      name: "kjssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
      text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
      price: 50,
    },
  ]);

  const handleIncreaseQty = (index) => {
    if (itemData.quantity < itemData.totalQty) {
      setItemData({ ...itemData, quantity: itemData.quantity + 1 });
    }
  };

  const handleDecreaseQty = (index) => {
    if (itemData.quantity >= 2) {
      setItemData({ ...itemData, quantity: itemData.quantity - 1 });
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto lg:px-20">
        <SectionPagintation
          title={product_id}
          path={[
            { name: "home", link: "/" },
            { name: "/" },
            { name: "some-category", link: `/category/some-category` },
            { name: "/" },
            { name: product_id },
          ]}
        />
        <SectionInfo
          itemData={itemData}
          handleDecreaseQty={handleDecreaseQty}
          handleIncreaseQty={handleIncreaseQty}
        />
        <SectionSimilarPro itemsList={itemsList} />
      </div>
      <Footer />
    </div>
  );
};

export default PageProduct;
