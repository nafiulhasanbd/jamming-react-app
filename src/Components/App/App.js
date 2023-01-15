import React, { Component } from 'react';
import './App.css'
import SearchResults from '../SearchResult/SearchResult';
import PlayList from '../Playlist/Playlist';

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
      ],
      playlistName: "myplaylist",
      playlistTracks:[
        {
          name: "song1",
          artist: "artist1",
          album: "album1",
          id: "1"
        },
        {
          name: "song2",
          artist: "artist2",
          album: "album2",
          id: "2"
        }
      ]
    };
  }

  addTrack(track){
    let existingTracks = this.state.playlistTracks;
    let findDuplicate = existingTracks.find( existingTracks => existingTracks.id === track.id)
    if(!findDuplicate){
      existingTracks.push(track);
      this.setState = {
        playlistTracks : existingTracks
      }
    }
    
  }

  render() {
    return (
      <div>
         <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <PlayList name={this.state.playlistName} track={this.state.playlistTracks} />
    <div className="App-playlist">
      <SearchResults searchResults={this.state.searchResults} />
    </div>
  </div>
      </div>
    );
  }
}

export default App;


