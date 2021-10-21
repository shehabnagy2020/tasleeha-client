import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import Footer from "../components/Footer";
import SectionDetails from "../components/PageProductsOffers/SectionDetails";
import SectionItemsList from "../components/PageProductsOffers/SectionItemsList";
import { sortBy, reverse } from "lodash";

import Axios from "axios";
import { API } from "../CONST";

const PageProductsOffers = () => {
  const [sortType, setSortType] = useState(0);
  const [viewType, setViewType] = useState(1);
  const [itemsList, setItemsList] = useState([]);
  const getProductsOffers = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/product/getAll",
      method: "GET",
      params: { type: "decor" },
    });
    console.log(axiosReq);
    setItemsList([...axiosReq?.data?.data]);
  };
  useEffect(() => {
    getProductsOffers();
  }, []);
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
          title={"عروض"}
          path={[
            { name: "الرئيسية", link: "/" },
            { name: "/" },
            { name: "عروض" },
          ]}
        />
        {itemsList?.length >= 1 ? (
          <>
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
          </>
        ) : (
          <div className="container mx-auto lg:px-20">
            <div className="border bg-gray-200 p-10 rounded my-20">
              <p className="font-medium text-2xl capitalize text-gray-600 text-center">
                لا يوجد منتجات عليها عروض الان
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PageProductsOffers;
