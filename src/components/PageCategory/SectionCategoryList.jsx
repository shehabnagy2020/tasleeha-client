import React from "react";
import Item3 from "../Common/Items/Item3";

const SectionCategoryList = ({ itemsList }) => {
  return (
    <div className="pb-8">
      <div
        className={`grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 `}
      >
        {itemsList.map((item) => (
          <Item3 key={item.id} itemData={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionCategoryList;
