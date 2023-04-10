import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import youtube from "./api/youtube-api";

import SearchBar from "./components/SearchBar";


export default class App extends Component {

  state = { videos: [] }

  onQuerySubmit = async (query) => {
    const res = await youtube.get("/search", {
      params: {
        q: query
      }
    })

    this.setState({ videos: res.data.items }, () => {
      console.log(this.state.videos);
    })

  }

  render() {
    return (
      <div className='container ui'>
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
      </div>
    )
  }
}
