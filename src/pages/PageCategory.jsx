import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import Footer from "../components/Footer";
import SectionDetails from "../components/PageCategory/SectionDetails";
import SectionItemsList from "../components/PageCategory/SectionItemsList";
import { sortBy, reverse } from "lodash";
import { useParams } from "react-router-dom";
import HelperContext from "../contexts/HelperContext";
import Axios from "axios";
import { API } from "../CONST";

const PageCategory = () => {
  const [sortType, setSortType] = useState(0);
  const [viewType, setViewType] = useState(1);
  const { category_id } = useParams();
  const [itemsList, setItemsList] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const { categoryItems } = useContext(HelperContext);

  const getCategoryProducts = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/product/getAll",
      method: "GET",
      params: { category_id },
    });
    setItemsList([...axiosReq?.data?.data]);
  };

  useEffect(() => {
    if (categoryItems?.length >= 1) {
      let [data] = categoryItems.filter((d) => d.id == category_id);
      if (data) {
        setCategoryData({ ...data });
        getCategoryProducts(category_id);
      }
    }
  }, [category_id]);
  useEffect(() => {
    if (itemsList.length >= 1) {
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
  }, [sortType]);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto lg:px-20">
        <SectionPagintation
          title={categoryData.name}
          path={[
            { name: "الرئيسية", link: "/" },
            { name: "/" },
            { name: categoryData.name },
          ]}
        />
        <SectionDetails
          viewType={viewType}
          setViewType={setViewType}
          sortType={sortType}
          setSortType={setSortType}
          itemsList={itemsList}
          categoryData={categoryData}
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
