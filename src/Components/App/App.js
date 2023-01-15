import React, { Component } from 'react';
import './App.css'
import SearchResults from '../SearchResult/SearchResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Hello Song",
          artist: "Nafiul",
          album: "2022",
          id: "1"
        }
      ]
    };
  }

  render() {
    return (
      <div>
         <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
    </div>
  </div>
      </div>
    );
  }
}

export default App;


