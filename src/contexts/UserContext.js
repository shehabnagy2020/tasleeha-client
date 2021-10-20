import React, { useState, useEffect } from "react";
import Axios from "axios";
import { API } from "../CONST";
import { useHistory } from "react-router-dom";

// create new react context and export it
const UserContext = React.createContext();
export default UserContext;

export const UserContextProvider = ({ children }) => {
  // create new states
  const [userInfo, setUserInfo] = useState({});
  const [userLoader, setUserLoader] = useState({});
  const history = useHistory();

  useEffect(() => {
    let oldUser = localStorage.getItem("userInfo");
    if (oldUser) setUserInfo(JSON.parse(oldUser));
  }, []);

  const handleRegister = async (userObj) => {
    setUserLoader({ ...userLoader, register: true });
    try {
      const axiosReq = await new Axios({
        baseURL: API,
        url: "/api/user/register",
        method: "POST",
        data: { ...userObj },
      });
      setUserInfo({ ...axiosReq?.data?.user });
      localStorage.setItem("userInfo", JSON.stringify(axiosReq?.data?.user));
      history.push("/");
      setUserLoader({ ...userLoader, register: false, registerError: "" });
    } catch (error) {
      console.log(error.response);
      setUserLoader({
        ...userLoader,
        register: false,
        registerError: "حصل خطأ برجاء المحاولة مره أخري",
      });
    }
  };

  const handleLogin = async (userObj) => {
    setUserLoader({ ...userLoader, login: true });
    try {
      const axiosReq = await new Axios({
        baseURL: API,
        url: "/api/user/login",
        method: "POST",
        data: { ...userObj },
      });
      setUserInfo({ ...axiosReq?.data?.user });
      localStorage.setItem("userInfo", JSON.stringify(axiosReq?.data?.user));
      history.push("/");
      setUserLoader({ ...userLoader, login: false, loginError: "" });
    } catch (error) {
      console.log(error.response);
      setUserLoader({
        ...userLoader,
        login: false,
        loginError: error?.response?.data?.error
          ? error.response.data.error
          : "حصل خطأ برجاء المحاولة مرة أخري",
      });
    }
  };

  const handleEditUser = async (userObj) => {
    setUserLoader({ ...userLoader, editUser: true });
    try {
      const axiosReq = await new Axios({
        baseURL: API,
        url: "/api/user/edit",
        method: "POST",
        data: { ...userObj },
      });
      setUserInfo({ ...userObj });
      localStorage.setItem("userInfo", JSON.stringify(userObj));
      console.log(axiosReq);
      setUserLoader({ ...userLoader, editUser: false, editUserError: "" });
    } catch (error) {
      console.log(error.response);
      setUserLoader({
        ...userLoader,
        editUser: false,
        editUserError: error?.response?.data?.error
          ? error.response.data.error
          : "حصل خطأ برجاء المحاولة مرة أخري",
      });
    }
  };

  const handleLogout = () => {
    setUserInfo({});
    localStorage.removeItem("userInfo");
    history.push("/");
  };

  return (
    // return provider of the context with value object to be used wih all children components
    <UserContext.Provider
      value={{
        userInfo,
        handleLogin,
        handleRegister,
        userLoader,
        handleEditUser,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
