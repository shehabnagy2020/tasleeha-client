import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import Footer from "../components/Footer";
import SectionDetails from "../components/PageCategory/SectionDetails";
import SectionItemsList from "../components/PageCategory/SectionItemsList";
import DATA from "../DATA.json";
import { sortBy, reverse } from "lodash";
import { useParams } from "react-router-dom";

const PageCategory = () => {
  const [sortType, setSortType] = useState(0);
  const [viewType, setViewType] = useState(1);
  const { category_id } = useParams();
  const [itemsList, setItemsList] = useState([]);

  useEffect(() => {
    if (DATA.length >= 1) {
      let newList = [...DATA];
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
  }, [sortType]);

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
