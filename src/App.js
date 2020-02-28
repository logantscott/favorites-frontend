import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import AppLogin from './AppLogin';
import { FavoritesApp } from './FavoritesApp.js';

const isLoggedIn = () => JSON.parse(localStorage.getItem('user'));

export default class App extends Component {



  render() {
    return (
        <Router>
            <div className="App">
                <header>
                    <Link to="/">Home</Link><br />
                    <Link to="/favorites">My Favorites</Link><br />
                </header>
                
                <Switch>
                    <Route exact path="/" render={() => 
                        isLoggedIn() 
                            ? <FavoritesApp />
                            : <Redirect to='login' />
                    }/>
                    {/* <Route exact path='/' component={TodoApp} /> */}
                    <Route exact path='/login' component={AppLogin} />
                    <Route exact path='/favorites' component={FavoritesApp} />
                </Switch>
            </div>
        </Router>
    );
  }
}