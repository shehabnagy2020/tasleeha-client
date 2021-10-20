import Footer from "../components/Footer";
import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import SectionProductsTable from "../components/PageCart/SectionProductsTable";
import SectionTotals from "../components/PageCart/SectionTotals";
import HelperContext from "../contexts/HelperContext";

const PageCart = () => {
  let { cartItems } = useContext(HelperContext);

  useEffect(() => {
    // handleLocation();
  });
  console.log(cartItems);
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Header />
      {cartItems?.items?.length >= 1 ? (
        <div className="container mx-auto lg:px-20">
          <SectionPagintation
            title={"السلة"}
            path={[
              { name: "الرئيسية", link: "/" },
              { name: "/" },
              { name: "السلة" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-8 pb-7">
            <div className="lg:col-span-9">
              <SectionProductsTable />
            </div>
            <div className="lg:col-span-3">
              <SectionTotals />
            </div>
          </div>
        </div>
      ) : (
        <div className="container mx-auto lg:px-20">
          <div className="border bg-gray-200 p-10 rounded my-20">
            <p className="font-medium text-2xl capitalize text-gray-600 text-center">
              لا يوجد منتجات في السلة الان
            </p>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PageCart;
