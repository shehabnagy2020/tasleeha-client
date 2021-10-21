import React, { useState, useEffect, useContext } from "react";
import Axios from "axios";
import { API } from "../CONST";
import UserContext from "./UserContext";
import { useHistory } from "react-router-dom";

// create new react context and export it
const HelperContext = React.createContext();
export default HelperContext;

export const HelperContextProvider = ({ children }) => {
  // create new states
  const [cartItems, setCartItems] = useState({ products: [], total: 0 });
  const [categoryItems, setCategoryItems] = useState([]);
  const [isNotification, setIsNotification] = useState(false);
  const [notificationsItems, setNotificationsItems] = useState([]);
  const [helperLoader, setHelperLoader] = useState({});
  const { userInfo } = useContext(UserContext);
  const history = useHistory();

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
    setCategoryItems([...axiosReq?.data?.data]);
  };
  const getNotificationItems = async () => {
    setHelperLoader({ ...helperLoader, notifications: true });
    try {
      const axiosReq = await new Axios({
        baseURL: API,
        url: "/api/notifications/getAll",
        method: "GET",
      });
      setNotificationsItems([...axiosReq?.data?.data]);
      setHelperLoader({ ...helperLoader, notifications: false });
    } catch (error) {
      console.log(error.response);
    }
  };
  useEffect(() => {
    getCategoryItems();
    getNotificationItems();
  }, []);

  const handleIncreaseQty = (index) => {
    let item = cartItems?.products[index];
    item.quantity = item.quantity + 1;
    let newItems = [...cartItems.products];
    newItems[index] = { ...item };
    let newCartItems = {
      ...cartItems,
      total: cartItems.total + item.price,
      products: [...newItems],
    };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleDecreaseQty = (index) => {
    let item = cartItems?.products[index];
    if (item.quantity >= 2) {
      item.quantity = item.quantity - 1;
      let newItems = [...cartItems.products];
      newItems[index] = { ...item };
      let newCartItems = {
        ...cartItems,
        total: cartItems.total - item.price,
        products: [...newItems],
      };
      setCartItems(newCartItems);
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    }
  };

  const handleDelete = (index) => {
    let oldItem = cartItems.products[index];
    let newItems = [...cartItems.products];
    newItems.splice(index, 1);
    let newCartItems = {
      ...cartItems,
      total: cartItems.total - oldItem.price * oldItem.quantity,
      products: [...newItems],
    };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleLocation = () => {
    navigator.geolocation.getCurrentPosition((e) => {
      let newCartItems = {
        ...cartItems,
        lat: e.coords.latitude,
        long: e.coords.longitude,
      };
      setCartItems(newCartItems);
    });
  };

  const handleAddCart = (obj) => {
    if (!obj.quantity) obj.quantity = 1;
    console.log(obj);
    let newCartItems = {
      ...cartItems,
      total: cartItems.total + obj.price * obj.quantity,
      products: [...cartItems.products, obj],
    };
    setCartItems(newCartItems);
    localStorage.setItem("cartItems", JSON.stringify(newCartItems));
  };

  const handleAddOrder = async () => {
    if (cartItems.lat && cartItems.long) {
      try {
        setHelperLoader({ ...helperLoader, addOrder: true });
        let newCart = { ...cartItems, user_id: userInfo.id };
        console.log(newCart);
        const axiosReq = await new Axios({
          baseURL: API,
          url: "/api/orders/add",
          method: "POST",
          data: { ...newCart },
        });
        console.log(axiosReq);
        alert("تم ارسال الطلب بنجاح");
        setHelperLoader({ ...helperLoader, addOrder: false });
        localStorage.removeItem("cartItems");
        setCartItems({ products: [], total: 0 });
        history.push("/");
      } catch (error) {
        console.log(error.response);
      }
    } else {
      alert("نرجو الموافقة علي اعطاء الموقع صلاحية تحديد الموقع للمتابعة");
    }
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
        isNotification,
        setIsNotification,
        notificationsItems,
        handleAddOrder,
        helperLoader,
      }}
    >
      {children}
    </HelperContext.Provider>
  );
};
