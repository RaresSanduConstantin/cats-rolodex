import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeholder, handleChange }) => (
  <div className="wrap">
    {" "}
    <div className="search">
      <input
        className="searchTerm"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  </div>
);
