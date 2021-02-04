import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="list"
          type="text"
          className="form-control"
          placeholder="Type in a search term to begin"
          id="searchQuery"
        />
      </div>
    </form>
  );
}

export default SearchForm;
