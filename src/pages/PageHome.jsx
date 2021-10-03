import Footer from "../components/Footer";
import React from "react";
import Header from "../components/Header";
import SectionBanners from "../components/PageHome/SectionBanners";
import SectionCarousel from "../components/PageHome/SectionCarousel";
import SectionCategories from "../components/PageHome/SectionCategories";

const PageHome = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto pt-5 lg:px-20">
        <SectionCarousel />
        <SectionBanners />
        <SectionCategories />
      </div>
      <Footer />
    </div>
  );
};

export default PageHome;
