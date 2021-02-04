import React from "react";
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function CCSearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">YouTube ID (PkZNo7MFNFg):</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="name"
          list="list"
          type="text"
          className="form-control"
          placeholder="PkZNo7MFNFg"
          id="searchQuery"
        />
      </div>
    </form>
  );
}

export default CCSearchForm;
