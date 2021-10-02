import React from "react";

const SectionPagintation = ({ title = "", path = [] }) => {
  return (
    <div className="">
      <div className="py-4 my-5 bg-gray-100 flex justify-center items-center">
        <div className="flex flex-col gap-y-3 text-center">
          <h1 className="text-3xl font-light capitalize">{title}</h1>
          <div className="flex items-center justify-center gap-x-2">
            {path.map((i, j) =>
              i.link ? (
                <a
                  href={i.link}
                  className="font-bold text-sm capitalize text-blue-500"
                >
                  {i.name}
                </a>
              ) : (
                <span key={j} className="font-bold text-sm capitalize">
                  {i.name}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPagintation;
