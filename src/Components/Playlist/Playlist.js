import React, { Component } from 'react';
import './Playlist.css'
import TrackList from '../TrackList/TrackList'

class Playlist extends Component {
    render() {
        return (
            <div>
                <div className="Playlist">
                <input value="New Playlist"/>
                <TrackList  tracks={this.state.playlistTracks}/>
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
                </div>
            </div>
        );
    }
}

export default Playlist;