import React, { Component } from 'react'

export class GameSearchForm extends Component {
    render() {
        return (
            <form>
                <input type="text" onChange={this.props.handleSearchInput} value={this.props.searchInput} />
                <button type="submit" onClick={this.props.handleSearchSubmit}>Search!</button>
            </form>
        )
    }
}
