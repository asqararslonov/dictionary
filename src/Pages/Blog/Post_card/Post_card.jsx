import React, { Component } from 'react'

 class Post_card extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Post_card