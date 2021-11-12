import React, { Component } from 'react'
import classes from "./Post.module.css"
export default class Post extends Component {
    render() {
        return (
            <div className={classes.post__container}>
                <img src={this.props.img} alt={this.props.alt} width="350"/>
                <h1>{this.props.title}</h1>
                <p>{this.props.text}</p>
            </div>
        )
    }
}
