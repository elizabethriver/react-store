import React from "react";

const Search = ({search, searchInput, handlerSearch}) => (
    <div>
      <div className="Search">
        <input
          type="text"
          value={search}
          ref={searchInput}
          onChange={handlerSearch}
        />
      </div>
    </div>
  );

export default Search;
