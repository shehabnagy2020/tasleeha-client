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
import SectionCategoryList from "../components/PageCategory/SectionCategoryList";

const PageCategory = () => {
  const [sortType, setSortType] = useState(0);
  const [viewType, setViewType] = useState(1);
  const { category_id } = useParams();
  const [itemsList, setItemsList] = useState([]);
  const [categoryData, setCategoryData] = useState({});
  const { categoryItems } = useContext(HelperContext);
  const [isSubCategory, setIsSubCategory] = useState(false);

  const getCategoryProducts = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/product/getAll",
      method: "GET",
      params: { category_id },
    });
    console.log(axiosReq);
    setItemsList([...axiosReq?.data?.data]);
  };

  useEffect(() => {
    if (categoryItems?.all?.length >= 1) {
      let [data] = categoryItems.all.filter((d) => d.id == category_id);
      if (data) {
        setIsSubCategory(false);
        setCategoryData({ ...data });
        setItemsList([...data.sub_categories]);
      } else {
        let [sub] = categoryItems.subs.filter((d) => d.id == category_id);
        if (sub) {
          setIsSubCategory(true);
          setCategoryData({
            ...sub,
            parent_name: categoryItems.names[sub.parent_id],
          });
          getCategoryProducts(category_id);
        }
      }
    }
  }, [category_id, categoryItems]);
  console.log(categoryItems, categoryData);
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

  let path = isSubCategory
    ? [
        { name: "الرئيسية", link: "/" },
        { name: "/" },
        {
          name: categoryData.parent_name,
          link: `/category/${categoryData.parent_id}`,
        },
        { name: "/" },
        { name: categoryData.name },
      ]
    : [
        { name: "الرئيسية", link: "/" },
        { name: "/" },
        { name: categoryData.name },
      ];
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto lg:px-20 mt-44 lg:mt-48 xl:mt-36">
        <SectionPagintation title={categoryData.name} path={path} />
        <SectionDetails
          viewType={viewType}
          setViewType={setViewType}
          sortType={sortType}
          setSortType={setSortType}
          itemsList={itemsList}
          categoryData={categoryData}
          isSubCategory={isSubCategory}
        />
        {!isSubCategory && itemsList.length <= 0 && (
          <div className="py-16 px-3 text-center">
            <span className="text-2xl">
              لا يوجد فئات فرعية في هذة الفئة الاساسية
            </span>
          </div>
        )}
        {itemsList.length >= 1 && isSubCategory ? (
          <SectionItemsList
            sortType={sortType}
            viewType={viewType}
            itemsList={itemsList}
          />
        ) : (
          <SectionCategoryList itemsList={itemsList} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PageCategory;
