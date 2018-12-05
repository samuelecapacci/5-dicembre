import React, { Component } from 'react';

class Post extends Component {
    constructor(props) {
        super(props);
        this.State({
            post: []
        })
    }
    dataFetch() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => this.setState({
                post: json
            }
            ))
}

render() {
    return (
        <div className="post">
            dio
            </div>
    );
}

}
export default Post;