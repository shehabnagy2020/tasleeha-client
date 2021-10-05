import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import Footer from "../components/Footer";
import SectionDetails from "../components/PageCategory/SectionDetails";
import SectionItemsList from "../components/PageCategory/SectionItemsList";
import ItemIMG from "../assets/images/item.jpg";
import { sortBy, reverse } from "lodash";
import { useParams } from "react-router-dom";

const PageCategory = () => {
  const [sortType, setSortType] = useState(0);
  const [viewType, setViewType] = useState(1);
  const { category_id } = useParams();
  const [itemsList, setItemsList] = useState([
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

  useEffect(() => {
    if (itemsList && itemsList.length >= 1) {
      let newList = [...itemsList];
      if (sortType === 0) {
        newList = sortBy(newList, ["name", "price"]);
      } else if (sortType === 1) {
        newList = sortBy(newList, ["name", "price"]);
        newList = reverse(newList);
      } else if (sortType === 2) {
        newList = sortBy(newList, ["price", "name"]);
      } else {
        newList = sortBy(newList, ["price", "name"]);
        newList = reverse(newList);
      }
      setItemsList([...newList]);
    }
  }, [sortType, itemsList]);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto lg:px-20">
        <SectionPagintation
          title={category_id}
          path={[
            { name: "home", link: "/" },
            { name: "/" },
            { name: category_id },
          ]}
        />
        <SectionDetails
          viewType={viewType}
          setViewType={setViewType}
          sortType={sortType}
          setSortType={setSortType}
          itemsList={itemsList}
        />
        <SectionItemsList
          sortType={sortType}
          viewType={viewType}
          itemsList={itemsList}
        />
      </div>
      <Footer />
    </div>
  );
};

export default PageCategory;
