import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionInfo from "../components/PageProduct/SectionInfo";
import ItemIMG from "../assets/images/item.jpg";
import SectionSimilarPro from "../components/PageProduct/SectionSimilarPro";

const PageProduct = () => {
  const itemData = {
    id: 1,
    img: ItemIMG,
    name: "ajssad ahdjsha jkdhsjkadh ksajd kjsah dkjhasd",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, quaerat eum iusto consectetur maiores suscipit ipsum voluptates quo vitae aperiam debitis nisi eius eaque nam animi fugiat ut beatae assumenda?",
    price: 50,
  };
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

  return (
    <div className="">
      <div className="container mx-auto lg:px-20">
        <Header />
        <SectionInfo itemData={itemData} />
        <SectionSimilarPro itemsList={itemsList} />
        <Footer />
      </div>
    </div>
  );
};

export default PageProduct;
