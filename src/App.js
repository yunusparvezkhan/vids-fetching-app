import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"

import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube-api";
import VideoList from "./components/VideoList";


export default class App extends Component {

  state = { videos: [] }

  onQuerySubmit = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        q: query
      }
    })

    this.setState({ videos: res.data.items })

  }

  render() {
    return (
      <div className='container ui'>
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
        <span>Got {this.state.videos.length} videos</span>
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}
