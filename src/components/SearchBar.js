import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"

export default class SearchBar extends Component {
    state = { query: "" }

    render() {
        return (
            <div className='ui segment search-bar'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search Video</label>
                        <input type="text" onChange={(input) => this.setState({ query: input.target.value })} value={this.state.query} />
                    </div>
                </form>
            </div>
        )
    }
}
