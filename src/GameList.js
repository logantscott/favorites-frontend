import React, { Component } from 'react';
import { GameItem } from './GameItem.js';

export class GameList extends Component {
    render() {
        return (
            <div id="gamelist">
                <table>
                    <thead>
                        <tr className={this.props.games.length > 0 ? '' : 'empty'}>
                            <th>Fav</th>
                            <th>Name</th>
                            <th>Year</th>
                            <th>Players</th>
                            <th>Playtime</th>
                            <th>External ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.games.map(game => <GameItem game={game} handleFavorite={this.props.handleFavorite} favorites={this.props.favorites} key={game.id} />)}
                    </tbody>
                </table>
            </div>
        )
    }
}