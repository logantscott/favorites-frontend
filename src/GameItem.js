import React, { Component } from 'react'

//  <img src={this.props.game.thumb_url.replace('https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/','https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/')} />

export class GameItem extends Component {
    render() {
        // console.log(this.props.favorites.findIndex(el => el.external_id === this.props.game.id))
        return (
            <tr>
                <td className={this.props.favorites.findIndex(el => el.external_id === this.props.game.id) !== -1 ? 'fav' : ''} onClick={() => this.props.handleFavorite(this.props.game, this.props.favorites.findIndex(el => el.external_id === this.props.game.id))}>❤</td>
                <td>{this.props.game.name}</td>
                <td>{this.props.game.year_published}</td>
                <td>{this.props.game.min_players}-{this.props.game.max_players}</td>
                <td>{this.props.game.min_playtime}-{this.props.game.max_playtime}</td>
                <td>{this.props.game.id}</td>
            </tr>
        )
    }
}
