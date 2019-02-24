import React from "react";
import PropTypes from "prop-types";
import Cancel from "../assets/cancel.svg";

const SearchBar = ({
  searchTerm,
  onInputChange,
  onCancelButton,
  onSearchClicked
}) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search by book title or author"
        value={searchTerm}
        onChange={onInputChange}
      />
      {searchTerm !== "" ? (
        <span onClick={onCancelButton}>
          <img src={Cancel} alt="cancel" />
        </span>
      ) : null}
      <button onClick={onSearchClicked}>Search</button>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onCancelButton: PropTypes.func.isRequired
};

export default SearchBar;
