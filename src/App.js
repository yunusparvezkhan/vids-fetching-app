import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"

import SearchBar from "./components/SearchBar";
import youtube from "./api/youtube-api";
import VideoList from "./components/VideoList";
import VideoPreview from './components/VideoPreview';


export default class App extends Component {

  state = { videos: [], selectedVideo: null }

  onQuerySubmit = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        q: query
      }
    })

    this.setState({ videos: res.data.items })

  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className='container ui'>
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
        <span>Got {this.state.videos.length} videos</span>
        {this.state.selectedVideo !== null ? <VideoPreview vid={this.state.selectedVideo} /> : <div></div>}

        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    )
  }
}
