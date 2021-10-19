import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionCarousel from "../components/PageHome/SectionCarousel";
import SectionCategories from "../components/PageHome/SectionCategories";
import Axios from "axios";
import { API } from "../CONST";

const PageHome = () => {
  const [swipersData, setSwipersData] = useState([]);

  const getSwipers = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/swiper/getAll",
      method: "GET",
    });
    setSwipersData([...axiosReq?.data?.data]);
  };

  useEffect(() => {
    getSwipers();
  }, []);

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto pt-5 lg:px-20">
        <SectionCarousel swipersData={swipersData} />
        {/* <SectionBanners /> */}
        <SectionCategories />
      </div>
      <Footer />
    </div>
  );
};

export default PageHome;
