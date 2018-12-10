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
                <div className="id"><div className="indice">ID: </div>{this.state.user.id}</div>
                <div className="name"><div className="indice">NOME: </div>{this.state.user.name}</div>
                <div className="username"><div className="indice">USERNAME: </div>{this.state.user.username}</div>
                <div className="email"><div className="indice">EMAIL: </div>{this.state.user.email}</div>
                <div className="phone"><div className="indice">TELEFONO: </div>{this.state.user.phone}</div>
            </div>
        );
    }

}
export default User;