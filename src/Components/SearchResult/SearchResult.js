import React, { Component } from 'react';
import TrackList from '../TrackList/TrackList';
import './SearchResult.css'

class SearchResult extends Component {
    render() {
        return (
            <div>
                <div className="SearchResults">
                    <h2>Results</h2>
                    <TrackList tracks={this.state.SearchResult} />
                    </div>
            </div>
        );
    }
}

export default SearchResult;