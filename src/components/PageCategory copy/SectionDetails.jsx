import React from "react";

const SectionDetails = ({
  viewType,
  setViewType,
  sortType,
  setSortType,
  itemsList,
}) => {
  return (
    <div className="">
      <div className="pb-5 flex flex-col items-center justify-center">
        <div className="flex justify-between pb-3 pt-6 items-center w-full flex-col md:flex-row gap-y-3 md:gap-y-0">
          <div className="md:flex gap-x-3 items-center justify-start hidden">
            <button
              onClick={() => setViewType(1)}
              className={`text-sm flex justify-center items-center p-1 hover:bg-blue-300 hover:text-white ${
                viewType ? "text-blue-500" : "text-gray-500"
              }`}
            >
              <span className="material-icons">view_module</span>
            </button>
            <button
              onClick={() => setViewType(0)}
              className={`text-sm flex justify-center items-center p-1 hover:bg-blue-300 hover:text-white ${
                viewType ? "text-gray-500" : "text-blue-500"
              }`}
            >
              <span className="material-icons">toc</span>
            </button>
            <div className="">
              <span className="capitalize">
                there are {itemsList.length} items
              </span>
            </div>
          </div>
          <div className="flex items-center gap-x-3 justify-end">
            <span className="capitalize">sort by:</span>
            <button className="relative rounded-lg border w-40 p-2 dropdown-toggle">
              <span className="capitalize">
                {sortType
                  ? sortType === 1
                    ? "Z-A"
                    : sortType === 2
                    ? "Lowest to Highest"
                    : "Highest to Lowest"
                  : "A-Z"}
              </span>
              <div
                className="absolute left-0 z-10 w-full dropdown-menu"
                style={{ top: "100%" }}
              >
                <div className="flex flex-col items-center border justify-center bg-white rounded-md">
                  <div
                    className="w-full p-2 capitalize hover:bg-gray-200"
                    onClick={() => setSortType(0)}
                  >
                    A-Z
                  </div>
                  <div
                    className="p-3 w-full capitalize hover:bg-gray-200"
                    onClick={() => setSortType(1)}
                  >
                    Z-A
                  </div>
                  <div
                    className="p-3 w-full capitalize hover:bg-gray-200"
                    onClick={() => setSortType(2)}
                  >
                    lowest to highest
                  </div>
                  <div
                    className="p-3 w-full capitalize hover:bg-gray-200"
                    onClick={() => setSortType(3)}
                  >
                    highest to lowest
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDetails;
