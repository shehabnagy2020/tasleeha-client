import React from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import Footer from "../components/Footer";
import DATA from "../DATA.json";

const PagePrivacy = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      <div className="container mx-auto lg:px-20">
        <SectionPagintation
          title={"سياسة الاستخدام"}
          path={[
            { name: "الرئيسية", link: "/" },
            { name: "/" },
            { name: "سياسة الاستخدام" },
          ]}
        />

        <p className="text-gray-500 font-normal text-lg m-10">{DATA.privacy}</p>
      </div>
      <Footer />
    </div>
  );
};

export default PagePrivacy;
