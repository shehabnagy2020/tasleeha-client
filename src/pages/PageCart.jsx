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

  return (
    <div className="w-screen h-screen">
      <Header />
      {cartItems?.items && (
        <div className="container mx-auto lg:px-20">
          <SectionPagintation
            title={"Cart"}
            path={[
              { name: "home", link: "/" },
              { name: "/" },
              { name: "Cart" },
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
      )}
      <Footer />
    </div>
  );
};

export default PageCart;
