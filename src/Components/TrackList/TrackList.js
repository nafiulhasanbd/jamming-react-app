import React, { Component } from 'react';

class TrackList extends Component {
    render() {
        return (
            <div>
                <div className="TrackList">
                    {this.props.tracks.map(track => {
                        <div key={track.id}>
                            <p>{track.name}</p>
                            <p>{track.artist}</p>
                            <p>{track.album}</p>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

export default TrackList;