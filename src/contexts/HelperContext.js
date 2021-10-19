import React, { useState, useEffect } from "react";
import Axios from "axios";
import { API } from "../CONST";

// create new react context and export it
const HelperContext = React.createContext();
export default HelperContext;

export const HelperContextProvider = ({ children }) => {
  // create new states
  const [cartItems, setCartItems] = useState({});
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    let oldCart = localStorage.getItem("cartItems");
    if (oldCart) setCartItems(JSON.parse(oldCart));
  }, []);

  const getCategoryItems = async () => {
    const axiosReq = await new Axios({
      baseURL: API,
      url: "/api/categories/getAll",
      method: "GET",
    });
    console.log(axiosReq);
    setCategoryItems([...axiosReq?.data?.data]);
  };
  useEffect(() => {
    getCategoryItems();
  }, []);

  const handleIncreaseQty = (index) => {
    let item = cartItems?.items[index];
    if (item.quantity < item.totalQty) {
      item.quantity = item.quantity + 1;
      let newItems = [...cartItems.items];
      newItems[index] = { ...item };
      let newCartItems = {
        ...cartItems,
        total: cartItems.total + item.price,
        items: [...newItems],
      };
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const handleDecreaseQty = (index) => {
    let item = cartItems?.items[index];
    if (item.quantity >= 2) {
      item.quantity = item.quantity - 1;
      let newItems = [...cartItems.items];
      newItems[index] = { ...item };
      let newCartItems = {
        ...cartItems,
        total: cartItems.total - item.price,
        items: [...newItems],
      };
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const handleDelete = (index) => {
    let oldItem = cartItems.items[index];
    let newItems = [...cartItems.items];
    newItems.splice(index, 1);
    let newCartItems = {
      ...cartItems,
      total: cartItems.total - oldItem.price * oldItem.quantity,
      items: [...newItems],
    };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((e) => {
      let newCartItems = {
        ...cartItems,
        shipping: {
          ...cartItems.shipping,
          address: `${e.coords.latitude}  ${e.coords.longitude}`,
        },
      };
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    });
  };

  const handleAddCart = (obj) => {
    let newItem = { ...obj, quantity: 1, totalQty: 10 };
    let newCartItems = {
      ...cartItems,
      total: cartItems.total + obj.price,
      items: [...cartItems.items, newItem],
    };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  return (
    // return provider of the context with value object to be used wih all children components
    <HelperContext.Provider
      value={{
        cartItems,
        setCartItems,
        handleDecreaseQty,
        handleIncreaseQty,
        handleDelete,
        handleLocation,
        handleAddCart,
        categoryItems,
      }}
    >
      {children}
    </HelperContext.Provider>
  );
};
