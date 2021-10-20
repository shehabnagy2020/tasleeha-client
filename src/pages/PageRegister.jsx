import React, { useContext, useState } from "react";
import LoginIMG from "../assets/images/login-pic.jpg";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const PageRegister = () => {
  const { userLoader, handleRegister } = useContext(UserContext);
  const [info, setInfo] = useState({
    email: "",
    password: "",
    full_name: "",
    phone: "",
    address: "",
    city: "",
    region: "",
    notification_token: "",
  });
  const handleChange = (e) => {
    let { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegister(info);
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex justify-center items-center">
      <img
        src={LoginIMG}
        alt=""
        className="absolute w-full h-full top-0 left-0 object-cover"
      />
      <div className="relative w-10/12 md:w-8/12 rounded p-5 text-white bg-black bg-opacity-40">
        <form
          autoComplete={false}
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center"
        >
          <Link to="/">
            <h1 className="font-bold text-5xl capitalize mb-5">sovio</h1>
          </Link>
          <span className="font-light text-xl capitalize mb-5">
            انشئ حساب جديد معنا
          </span>
          <div className="mb-3">
            <input
              type="text"
              name=""
              id="full_name"
              required
              onChange={handleChange}
              value={info.full_name}
              className="border-b-2 bg-transparent text-white outline-none border-white py-3 w-56 md:w-72"
              placeholder="الاسم كامل"
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              name=""
              id="email"
              required
              onChange={handleChange}
              value={info.email}
              className="border-b-2 bg-transparent text-white outline-none border-white py-3 w-56 md:w-72"
              placeholder="البريد الالكتروني"
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              name=""
              id="password"
              required
              onChange={handleChange}
              value={info.password}
              className="border-b-2 bg-transparent text-white outline-none border-white py-3 w-56 md:w-72"
              placeholder="الرقم السري"
            />
          </div>
          <div className="mb-5">
            <input
              type="tel"
              name=""
              id="phone"
              required
              onChange={handleChange}
              value={info.phone}
              className="border-b-2 bg-transparent text-white outline-none border-white py-3 w-56 md:w-72"
              placeholder="رقم الهاتف"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name=""
              id="address"
              required
              onChange={handleChange}
              value={info.address}
              className="border-b-2 bg-transparent text-white outline-none border-white py-3 w-56 md:w-72"
              placeholder="العنوان"
            />
          </div>
          {userLoader.registerError && (
            <div className="mb-2">
              <span className="text-red-500">{userLoader.registerError}</span>
            </div>
          )}
          <div className="mb-5 text-center">
            {userLoader.register ? (
              <div className="transition-all animate-pulse">
                <span className="material-icons text-blue-500 text-4xl">
                  pending
                </span>
              </div>
            ) : (
              <button
                type="submit"
                className="rounded-lg bg-blue-500 text-white px-10 py-3 font-bold text-lg "
              >
                تسجيل حساب
              </button>
            )}
          </div>
          <span className="text-white font-bold text-lg capitalize">
            هل لديك حساب؟{" "}
            <a
              href="/login"
              className="text-blue-400 hover:underline font-normal"
            >
              تسجيل دخول
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default PageRegister;
