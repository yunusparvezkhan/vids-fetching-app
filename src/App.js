import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import SearchBar from "./components/SearchBar";


export default class App extends Component {

  state = { query: "" }

  onQuerySubmit = (query) => {
    this.setState({ query }, () => {
      console.log(this.state.query)
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
