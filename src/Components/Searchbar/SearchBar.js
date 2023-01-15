import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <button className="SearchButton">SEARCH</button>
      </div>
      </div>
    );
  }
}

export default SearchBar;