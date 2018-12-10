import React, { Component } from 'react';
import './User.css';

class Utente extends Component {

    render() {
        let utente = this.props.utente

        return (
            <div className="utente">
                <div className="id">{utente.id}</div>
                <div className="name">{utente.name}</div>
                <div className="username">{utente.username}</div>
                <div className="email">{utente.email}</div>
                <div className="address">{utente.address}</div>
                <div className="phone">{utente.phone}</div>
                <div className="id">{utente.website}</div>
                <div className="id">{utente.company}</div>
            </div>
        );
    }

}
export default Utente;