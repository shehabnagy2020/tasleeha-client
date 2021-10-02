import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import SectionPagintation from "../components/Common/SectionPagintation";
import SectionProductsTable from "../components/PageCart/SectionProductsTable";
import SectionTotals from "../components/PageCart/SectionTotals";
import ProductIMG from "../assets/images/tableImage.jpg";

const PageCart = () => {
  const [cartItems, setCartItems] = useState({
    total: 410,
    shipping: { address: "home", price: 10 },
    items: [
      {
        id: 1,
        img: ProductIMG,
        name: "	All Natural Italian-Style Chicken Meatballs",
        quantity: 1,
        totalQty: 10,
        price: 20,
      },
      {
        id: 2,
        img: ProductIMG,
        name: "	All Natural Italian-Style",
        quantity: 3,
        totalQty: 10,
        price: 30,
      },
      {
        id: 3,
        img: ProductIMG,
        name: "	All Chicken Meatballs",
        quantity: 5,
        totalQty: 10,
        price: 60,
      },
    ],
  });

  const handleIncreaseQty = (index) => {
    let item = cartItems?.items[index];
    if (item.quantity < item.totalQty) {
      item.quantity = item.quantity + 1;
      let newItems = [...cartItems.items];
      newItems[index] = { ...item };
      setCartItems((old) => {
        return { ...old, total: old.total + item.price, items: [...newItems] };
      });
    }
  };
  const handleDecreaseQty = (index) => {
    let item = cartItems?.items[index];
    if (item.quantity >= 2) {
      item.quantity = item.quantity - 1;
      let newItems = [...cartItems.items];
      newItems[index] = { ...item };
      setCartItems((old) => {
        return { ...old, total: old.total - item.price, items: [...newItems] };
      });
    }
  };
  const handleDelete = (index) => {
    setCartItems((old) => {
      let newItems = [...old.items];
      newItems.splice(index, 1);
      return { ...old, items: [...newItems] };
    });
  };
  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((e) => {
      setCartItems({
        ...cartItems,
        shipping: {
          ...cartItems.shipping,
          address: `${e.coords.latitude}  ${e.coords.longitude}`,
        },
      });
    });
  };

  useEffect(() => {
    handleLocation();
  });

  return (
    <div className="">
      <Header />
      <div className="container mx-auto lg:px-20">
        <SectionPagintation
          title={"Cart"}
          path={[{ name: "home", link: "/" }, { name: "/" }, { name: "Cart" }]}
        />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-5 lg:gap-y-0 lg:gap-x-8 pb-7">
          <div className="lg:col-span-9">
            <SectionProductsTable
              cartItems={cartItems}
              handleIncreaseQty={handleIncreaseQty}
              handleDecreaseQty={handleDecreaseQty}
              handleDelete={handleDelete}
            />
          </div>
          <div className="lg:col-span-3">
            <SectionTotals
              cartItems={cartItems}
              handleLocation={handleLocation}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PageCart;
