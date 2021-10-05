import React from "react";
import Item from "../Common/Items/Item";
import Item2 from "../Common/Items/Item2";

const SectionItemsList = ({ viewType, sortType, itemsList }) => {
  return (
    <div className="pb-8">
      <div
        className={`grid gap-8 ${
          viewType
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 "
            : "grid-cols-1"
        }`}
      >
        {itemsList.map((item) =>
          viewType ? (
            <Item key={item.id} itemData={item} />
          ) : (
            <Item2 key={item.id} itemData={item} />
          )
        )}
      </div>
    </div>
  );
};

export default SectionItemsList;
