import React, { useState } from "react";
import LoginIMG from "../assets/images/login-pic.jpg";

const PageRegister = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    full_name: "",
    phone_number: "",
  });
  const handleChange = (e) => {
    let { id, value } = e.target;
    setInfo({ ...info, [id]: value });
  };

  return (
    <div className="w-screen h-screen relative overflow-hidden flex justify-center items-center">
      <img
        src={LoginIMG}
        alt=""
        className="absolute w-full h-full top-0 left-0 object-cover"
      />
      <div className="relative w-10/12 md:w-8/12 rounded p-5 text-white bg-black bg-opacity-40">
        <form className="flex flex-col justify-center items-center">
          <h1 className="font-bold text-5xl capitalize mb-5">sovio</h1>
          <span className="font-light text-xl capitalize mb-5">
            create new account with us
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
              placeholder="Full Name"
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
              placeholder="Email"
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
              placeholder="Password"
            />
          </div>
          <div className="mb-5">
            <input
              type="tel"
              name=""
              id="phone_number"
              required
              onChange={handleChange}
              value={info.phone_number}
              className="border-b-2 bg-transparent text-white outline-none border-white py-3 w-56 md:w-72"
              placeholder="Phone Number"
            />
          </div>
          <button
            type="submit"
            className="rounded-lg bg-green-500 text-white px-10 py-3 font-bold text-lg mb-5"
          >
            Register
          </button>
          <span className="text-white font-bold text-lg capitalize">
            have an account?{" "}
            <a
              href="/login"
              className="text-blue-400 hover:underline font-normal"
            >
              login
            </a>
          </span>
        </form>
      </div>
    </div>
  );
};

export default PageRegister;
