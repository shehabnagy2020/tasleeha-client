import React, { useEffect } from "react";

import Swiper from "swiper/bundle";

import { API } from "../../CONST";

const SectionCarousel = ({ swipersData }) => {
  useEffect(() => {
    new Swiper(".swiper-container", {
      loop: true,
      autoHeight: true,
      //speed: "5000ms",
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
  // const caros = [
  //   {
  //     id: 1,
  //     image: CarouselIMG,
  //     title: "hello world",
  //     text: "welcome to the world",
  //     text2: "welcome to the motherfuckin world",
  //   },
  //   {
  //     id: 2,
  //     image: CarouselIMG,
  //     title: "hello world 2",
  //     text: "welcome to the world 2",
  //     text2: "welcome to the motherfuckin world",
  //   },
  //   {
  //     id: 3,
  //     image: CarouselIMG,
  //     title: "hello world 3",
  //     text: "welcome to the world 3",
  //     text2: "welcome to the motherfuckin world",
  //   },
  // ];

  return (
    <div className="">
      <div className="swiper-container ">
        <div className="swiper-wrapper">
          {swipersData?.map((item) => (
            <div className="swiper-slide " key={item.id}>
              <div className="h-96 md:h-100 w-full relative">
                <img
                  src={API + "/" + item.image}
                  className="w-full h-full object-cover absolute rounded-md"
                  alt=""
                />
                <div className="absolute left-0 bottom-0 w-full h-full bg-black bg-opacity-5 rounded-md"></div>
                {/* <div className="h-full w-8/12 p-5 flex flex-col  relative">
                  <h2 className="text-white font-light capitalize text-xl md:text-xl lg:text-2xl mb-5">
                    exclusive offer
                  </h2>
                  <h3 className="text-white font-bold capitalize text-2xl md:text-4xl lg:text-6xl mb-2">
                    specialist in the grocery store
                  </h3>
                  <h3 className="text-white font-medium capitalize text-base md:text-xl lg:text-2xl mb-5">
                    only this week don't miss
                  </h3>
                  <h3 className="text-white font-normal mt-14 capitalize text-xl md:text-xl lg:text-2xl mb-5">
                    from{" "}
                    <span className="text-white bg-red-400 p-1 rounded-md">
                      7.00 $
                    </span>
                  </h3>
                </div> */}
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
