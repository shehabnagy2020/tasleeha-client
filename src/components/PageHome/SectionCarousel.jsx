import React, { useEffect } from "react";

import Swiper from "swiper/bundle";
import FacebookIMG from "../../assets/images/facebook-pic.jpg";

const SectionCarousel = () => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      autoHeight: true,
      // speed: "1000ms",
      grabCursor: true,
      autoplay: true,

      allowSlideNext: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
      },
      slidesPerView: 1,
    });
  }, []);
  const caros = [
    {
      id: 1,
      image: FacebookIMG,
      title: "hello world",
      text: "welcome to the world",
      text2: "welcome to the motherfuckin world",
    },
    {
      id: 2,
      image: FacebookIMG,
      title: "hello world 2",
      text: "welcome to the world 2",
      text2: "welcome to the motherfuckin world",
    },
    {
      id: 3,
      image: FacebookIMG,
      title: "hello world 3",
      text: "welcome to the world 3",
      text2: "welcome to the motherfuckin world",
    },
  ];

  return (
    <div className="">
      <div className="swiper-container ">
        <div className="swiper-wrapper">
          {caros.map((item) => (
            <div className="swiper-slide " key={item.id}>
              <div className="h-96 md:h-100 w-full relative flex justify-center items-center ">
                <img
                  src={item.image}
                  className="w-full h-full object-cover absolute"
                  alt=""
                />
                <div className="h-full w-full bg-black bg-opacity-75 absolute"></div>
                <div className="flex flex-col  relative">
                  <h2 className="text-white font-normal capitalize text-xl md:text-xl lg:text-2xl">
                    {item.title}
                  </h2>
                  <h3 className="text-white font-bold capitalize text-2xl md:text-4xl lg:text-6xl">
                    {item.text}
                  </h3>
                  <h3 className="text-white font-normal mt-14 capitalize text-xl md:text-xl lg:text-2xl">
                    {item.text2}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        {/* <div class="swiper-button-prev"></div> */}
        {/* <div class="swiper-button-next"></div> */}
        {/* <div class="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
};

export default SectionCarousel;
