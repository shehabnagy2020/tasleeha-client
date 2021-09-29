import React from "react";
import Banner1IMG from "../../assets/images/banner1.jpg";
import Banner2IMG from "../../assets/images/banner2.jpg";

const SectionBanners = () => {
  const banners = [
    {
      id: 1,
      text: "20% Off",
      text2: "Children Items",
      pic: Banner1IMG,
    },
    {
      id: 2,
      text: "Discount 30%",
      text2: "Special Child S",
      pic: Banner2IMG,
    },
  ];
  return (
    <div className="py-14 ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-center gap-y-10 md:gap-y-0 md:gap-x-10">
        {banners.map((item) => (
          <div
            key={item.id}
            className="relative scale-img flex justify-start items-center flex-grow h-60"
          >
            <img
              src={item.pic}
              alt=""
              className="absolute w-full h-full object-cover"
            />
            <div className="relative mx-10 flex flex-col">
              <span className="text-white font-medium text-xl">
                {item.text}
              </span>
              <span className="text-white font-medium text-xl">
                {item.text2}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionBanners;
