import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const SectionSearch = () => {
  const [searchText, setSearchText] = useState("");
  let historyChanger = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchText) {
      historyChanger.push(`/search/${searchText}`);
    } else {
      historyChanger.push(`/`);
    }
  };
  return (
    <div className="w-9/12 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-200 border p-2 rounded flex justify-center items-center gap-x-2 text-gray-600"
      >
        <input
          type="search"
          className="bg-transparent flex-grow outline-none"
          placeholder="search..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button type="submit" className="flex justify-center items-center ">
          <i className="material-icons">search</i>
        </button>
      </form>
    </div>
  );
};

export default SectionSearch;
