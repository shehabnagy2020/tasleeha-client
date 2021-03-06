import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionInfo from "../components/PageProduct/SectionInfo";
import SectionSimilarPro from "../components/PageProduct/SectionSimilarPro";
import SectionPagintation from "../components/Common/SectionPagintation";
import { useLocation, useHistory } from "react-router-dom";
import { API } from "../CONST";
import Axios from "axios";
import HelperContext from "../contexts/HelperContext";

const PageProduct = () => {
  const { state } = useLocation();
  const { push } = useHistory();
  const [itemsList, setItemsList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState({});
  const { categoryItems } = useContext(HelperContext);

  const getCategoryProducts = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/product/getAll",
      method: "GET",
      params: { category_id: state?.category_id },
    });
    let container = [];
    if (axiosReq?.data?.data?.length >= 1)
      for (let i = 0; i < axiosReq.data.data.length; i++) {
        const element = axiosReq.data.data[i];
        if (element.id != state.id) container.push(element);
        if (container.length >= 5) break;
      }
    setItemsList([...container]);
  };

  const [itemData, setItemData] = useState({});

  useEffect(() => {
    if (state?.id) {
      setItemData({ ...state, quantity: 1 });
      getCategoryProducts();
    } else {
      push("/");
    }
  }, [state]);
  useEffect(() => {
    if (categoryItems?.subs?.length >= 1 && state?.category_id) {
      let [cu] = categoryItems.subs.filter((i) => i.id == state.category_id);
      setCurrentCategory({ ...cu });
    }
  }, [categoryItems, state]);

  const handleIncreaseQty = (index) => {
    setItemData({ ...itemData, quantity: itemData.quantity + 1 });
  };

  const handleDecreaseQty = (index) => {
    if (itemData.quantity >= 2) {
      setItemData({ ...itemData, quantity: itemData.quantity - 1 });
    }
  };

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto lg:px-20 mt-44 lg:mt-48 xl:mt-36">
        <SectionPagintation
          path={[
            { name: "????????????????", link: "/" },
            { name: "/" },
            {
              name: currentCategory.name,
              link: `/category/${currentCategory.id}`,
            },
            { name: "/" },
            { name: state?.name },
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
