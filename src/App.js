import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import youtube from "./api/youtube-api";

import SearchBar from "./components/SearchBar";


export default class App extends Component {

  state = { query: "" }

  onQuerySubmit = async (query) => {
    this.setState({ query }, () => {
      console.log(this.state.query)
    });

    const res = await youtube.get("/search", {
      params: {
        q: query
      }
    })

    console.log(res);

  }

  render() {
    return (
      <div className='container ui'>
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
      </div>
    )
  }
}
