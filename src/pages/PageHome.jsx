import Footer from "../components/Footer";
import React from "react";
import Header from "../components/Header";
import SectionBanners from "../components/PageHome/SectionBanners";
import SectionCarousel from "../components/PageHome/SectionCarousel";
import SectionCategories from "../components/PageHome/SectionCategories";

const PageHome = () => {
  return (
    <div className="">
      <div className="container mx-auto lg:px-20">
        <Header />
        <SectionCarousel />
        <SectionBanners />
        <SectionCategories />
        <Footer />
      </div>
    </div>
  );
};

export default PageHome;
