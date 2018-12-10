import React, { Component } from 'react';
import './User.css';

class User extends Component {
    constructor(props) {
        super(props);


        this.state = {
            user: []
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users/' + this.props.id)
            .then((response) => response.json())
            .then((json) => this.setState({
                user: json
            }))
    }

    render() {
        return (
            <div className="utente">
                <br />
                <br />
                <br />
                <div className="id">{this.state.user.id}</div>
                <div className="name">{this.state.user.name}</div>
                <div className="username">{this.state.user.username}</div>
                <div className="email">{this.state.user.email}</div>
                <div className="phone">{this.state.user.phone}</div>
            </div>
        );
    }

}
export default User;