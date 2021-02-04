import React from "react";
import "./style.css";

// By extending the React.Component class, Counter inherits functionality from it
class DropDown extends React.Component {
  render() {
    return (
    <select class="custom-select">
        <option selected>Choose one:</option>
        <option value="create">I like to create things.</option>
        <option value="complete">I like to complete tasks.</option>
    </select>
    );
  }
}
export default DropDown;
