import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionDetails from "../components/PageSearch/SectionDetails";
import SectionItemsList from "../components/PageSearch/SectionItemsList";
import { sortBy, reverse } from "lodash";
import { useParams, useHistory } from "react-router-dom";
import { API } from "../CONST";
import Axios from "axios";

const PageSearch = () => {
  const [sortType, setSortType] = useState(0);
  const [viewType, setViewType] = useState(1);
  const { search_text } = useParams();
  const [itemsList, setItemsList] = useState([]);
  const history = useHistory();
  const searchWeb = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/product/search",
      method: "GET",
      params: { query: search_text.toLowerCase() },
    });
    setItemsList([...axiosReq?.data?.data]);
    console.log(axiosReq);
  };
  useEffect(() => {
    if (search_text) {
      searchWeb();
    } else {
      history.push("/");
    }
  }, [search_text]);

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
  }, [sortType]);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className=" mt-44 lg:mt-48 xl:mt-36">
        {itemsList.length >= 1 ? (
          <div className="container mx-auto lg:px-20">
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
        ) : (
          <div className="container mx-auto lg:px-20">
            <div className="border bg-gray-200 p-10 rounded my-20">
              <p className="font-medium text-2xl capitalize text-gray-600 text-center">
                لا يوجد منتجات بهذا البحث
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PageSearch;
