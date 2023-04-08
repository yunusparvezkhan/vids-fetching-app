import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"
import SearchBar from "./components/SearchBar";


export default class App extends Component {
  render() {
    return (
      <div className='container ui'>
        <SearchBar />
      </div>
    )
  }
}
