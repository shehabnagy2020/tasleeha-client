import React, { useContext, useEffect } from "react";
import Swiper from "swiper/bundle";

import { API } from "../../CONST";
import HelperContext from "../../contexts/HelperContext";

const SectionCategories = () => {
  const { categoryItems } = useContext(HelperContext);

  useEffect(() => {
    new Swiper(".cats-container", {
      // speed: "1000ms",
      grabCursor: true,
      autoplay: true,

      allowSlideNext: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      slidesPerView: 2,
      spaceBetween: 20,
      breakpoints: {
        576: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }, []);
  // const cats = [
  //   { id: 1, img: LogoIMG, text: "sad" },
  //   { id: 2, img: LogoIMG, text: "sad2" },
  //   { id: 3, img: LogoIMG, text: "sad3" },
  //   { id: 4, img: LogoIMG, text: "sad4" },
  //   { id: 5, img: LogoIMG, text: "sad5" },
  //   { id: 6, img: LogoIMG, text: "sad6" },
  // ];
  return (
    <div className="py-14">
      <div className="w-full relative border rounded">
        <h1 className="font-light text-2xl text-gray-500 capitalize m-5 ">
          جميع الفئات
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryItems?.all?.map((item) => (
            <a
              href={`/category/${item.id}`}
              key={item.id}
              className="md:border-r flex flex-col justify-center items-center gap-y-3 px-5 my-5"
            >
              <img
                src={API + "/" + item.image}
                className="object-cover w-32"
                alt=""
              />
              <p className="text-gray-500 capitalize font-normal text-lg">
                {item.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionCategories;
