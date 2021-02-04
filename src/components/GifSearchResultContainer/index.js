import React, { Component } from "react";
import GifSearchForm from "../GifSearchForm";
import GifResultList from "../GifResultList";
import gifAPI from "../../utils/gifAPI";

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of coding
  componentDidMount() {
    this.searchGiphy("coding");
  }

  searchGiphy = query => {
    gifAPI.search(query)
      .then(res => this.setState({ results: res.data.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchGiphy(this.state.search);
  };

  render() {
    return (

      <div>
      <h5>gif Search:</h5>
        <GifSearchForm
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <GifResultList className="gifResultList" results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
