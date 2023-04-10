import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import SearchBar from "./components/SearchBar";


export default class App extends Component {

  state = { query: "" }

  onQuerySubmit = (query) => {
    console.log(query)
  }

  render() {
    return (
      <div className='container ui'>
        <SearchBar onQuerySubmit={this.onQuerySubmit} />
      </div>
    )
  }
}
