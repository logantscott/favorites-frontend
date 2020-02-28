import React, { Component } from 'react'
import request from 'superagent';

export default class TodoAppLogin extends Component {
    state = {
        usernameSignIn: '',
        usernameSignUp: '',
        passwordSignIn: '',
        passwordSignUp: '',
        usernameDisplay: ''
    }

    handleSignIn = async () => {
        const signIn = await request.post(`https://fierce-mesa-39439.herokuapp.com/api/auth/signin`, {
            email: this.state.usernameSignIn,
            password: this.state.passwordSignIn,
        })

        localStorage.setItem('user', JSON.stringify(signIn.body));
    }

    handleSignUp = async () => {
        const signUp = await request.post(`https://fierce-mesa-39439.herokuapp.com/api/auth/signup`, {
            name: this.state.usernameDisplay,
            email: this.state.usernameSignUp,
            password: this.state.passwordSignUp,
        })

        localStorage.setItem('user', JSON.stringify(signUp.body));
    }

    render() {
        return (
            <div>
                name: <input type='name' value={ this.state.usernameDisplay} onChange={(e) => this.setState({ usernameDisplay: e.target.value})} /><br />
                email: <input type='email' value={ this.state.usernameSignUp} onChange={(e) => this.setState({ usernameSignUp: e.target.value})} /><br />
                password: <input type='password' value={ this.state.passwordSignUp} onChange={(e) => this.setState({ passwordSignUp: e.target.value})} /><br />

                <button onClick={ this.handleSignUp }>Sign up</button><br />
                <br/>
                email: <input type='email' value={ this.state.usernameSignIn} onChange={(e) => this.setState({ usernameSignIn: e.target.value})} /><br />
                password: <input type='password' value={ this.state.passwordSignIn} onChange={(e) => this.setState({ passwordSignIn: e.target.value})} /><br />

                <button onClick={this.handleSignIn}>Sign in</button>     
   
                </div>
        )
    }
}