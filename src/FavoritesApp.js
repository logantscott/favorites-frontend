import React, { Component } from 'react'
import { getFavorites, addFavorite, getGames, deleteFavorite } from './api_services.js';
import { GameSearchForm } from './GameSearchForm.js';
import { GameList } from './GameList.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export class FavoritesApp extends Component {
    state = {
        games: [],
        favorites: [],
        searchInput: '',
        favClicked: false
    }

    componentDidMount = async() => {
        const data = await getFavorites();
        console.log(data.body)
        if(data.body){ this.setState({ favorites: data.body }) };
    }

    handleSearchInput = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    handleSearchSubmit = async(e) => {
        e.preventDefault();
        if(this.state.searchInput !== ''){ 

            const data = await getGames(this.state.searchInput);
            console.log(data);
            this.setState({ games: data.body.games })
            
        } else {
            alert('Please enter a search query...');
        }
    }

    // handle completing/uncompleting tasks
    handleFavorite = async(game, favId) => {

        if(!this.state.favClicked){
            this.setState({favClicked: true});

            const params = {
                name: game.name ? game.name : '#MISSING_GAME_NAME#',
                url: game.url ? game.url : '#',
                image_url: game.image_url ? game.image_url : '#',
                external_id: game.id,
                min_players: game.min_players ? game.min_players : 0,
                max_players: game.max_players ? game.max_players : 0,
                min_playtime: game.min_playtime ? game.min_playtime : 0,
                max_playtime: game.max_playtime ? game.max_playtime : 0
            };

            const data = favId === -1
                ? await addFavorite(params)
                : await deleteFavorite({id: this.state.favorites[favId].id})
                
            console.log(data.body)

            const favdata = await getFavorites();
            if(favdata.body){ this.setState({ favorites: favdata.body }) };
            this.setState({favClicked: false});
        }
    }

    // handle deleting tasks
    handleDelete = async(todoId) => {
        const newTodos = [...this.state.todos];
        newTodos.splice(this.state.todos.findIndex(el => el.id === todoId), 1);
        this.setState({ todos: newTodos });

        const params = { id: todoId };
        const data = await deleteFavorite(params);
        console.log(data.body);
    }

    render() {
        return (
            <div>
                {isLoggedIn() 
                        ? <button onClick={() => {
                            localStorage.clear();
                            window.location.reload(false);
                        }}>Logout</button>
                : ''}
                <br />
                <GameSearchForm 
                    handleSearchInput={this.handleSearchInput} 
                    searchInput={this.state.searchInput} 
                    handleSearchSubmit={this.handleSearchSubmit} 
                />
                <GameList 
                    games={this.state.games} 
                    handleFavorite={this.handleFavorite}
                    favorites={this.state.favorites}
                />
            </div>
        )
    }
}
