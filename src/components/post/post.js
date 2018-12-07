import React, { Component } from 'react';
import './Post.css';

class Post extends Component {

    render() {
        let item = this.props.item

        return (
            <div className="post">
                <br />
                <div className="container">
                    <div className="id-item"><div className="indice">ID: </div>{item.id}</div>
                    <div className="id-user"><div className="indice">ID UTENTE: </div>{item.userId}</div>
                    <div className="item-title"><div className="indice">TITOLO: </div>{item.title}</div>
                    <div className="item-body"><div className="indice">CONTENUTO: </div>{item.body}</div>
                </div>
                <br />
            </div>
        );
    }

}
export default Post;