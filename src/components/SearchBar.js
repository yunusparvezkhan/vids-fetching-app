import React, { Component } from 'react';
import "semantic-ui-css/semantic.min.css"

export default class SearchBar extends Component {
    render() {
        return (
            <div className='ui segment search-bar'>
                <form className='ui form'>
                    <div className='field'>
                        <label>Search Video</label>
                        <input type="text" />
                    </div>
                </form>
            </div>
        )
    }
}
