import React, { useEffect } from "react";
import Swiper from "swiper/bundle";
import LogoIMG from "../../assets/images/logo.jpg";

const SectionCategories = () => {
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
  const cats = [
    { id: 1, img: LogoIMG, text: "sad" },
    { id: 2, img: LogoIMG, text: "sad2" },
    { id: 3, img: LogoIMG, text: "sad3" },
    { id: 4, img: LogoIMG, text: "sad4" },
    { id: 5, img: LogoIMG, text: "sad5" },
    { id: 6, img: LogoIMG, text: "sad6" },
  ];
  return (
    <div className="py-14">
      <div className="w-full relative">
        <div className="swiper-button-prev"></div>
        <div className="cats-container overflow-hidden w-4/5 mx-auto">
          <div className="swiper-wrapper">
            {cats.map((item) => (
              <a
                href={`/category/${item.id}`}
                className="swiper-slide"
                key={item.id}
              >
                <div
                  className="flex items-center justify-center gap-y-2 flex-col"
                  id={item.id}
                >
                  <div className="rounded-full bg-blue-500 p-5">
                    <img
                      src={item.img}
                      alt=""
                      className="w-10 h-10 rounded-full"
                    />
                  </div>
                  <div className="">
                    <span className="capitalize font-normal text-lg">
                      {item.text}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};

export default SectionCategories;
