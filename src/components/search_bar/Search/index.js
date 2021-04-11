import React , { Component } from 'react';

class Search extends Component{

  constructor(props){
      super(props);
      this.state ={ searchterm : 'find videos'};
  }
  render(){
    //return <input onChange={this.onInputChange}/>;
    //return <input onChange={event =>console.log(event.target.value) }/>
    return (
      <div className="search-bar">
      <input
        value = {this.state.searchterm}
        onChange = {event => this.onInputChange(event.target.value)}
      />
      </div>
    );
  }

  onInputChange(searchterm){
    this.setState({searchterm});
    this.props.onSearchTermChange(searchterm);
    //console.log(event.target.value);
    // console.log(value);
  }
}

export default Search;