import React from "react";
import Item from "../PageCategory/SectionItemsList/Item";

const SectionSimilarPro = ({ itemsList }) => {
  return (
    <div className="pb-8">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-col gap-y-3 border-b pb-3">
          <span className="text-xl font-bold capitalize">
            you might also like
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {itemsList.slice(0, 5).map((item) => (
            <Item itemData={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionSimilarPro;
