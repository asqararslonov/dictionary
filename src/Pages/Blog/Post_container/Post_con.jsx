import React, { Component } from 'react'
import Post from '../Post/Post'
import Post_card from '../Post_card/Post_card'
import "./Post_con.css"
class Post_con extends Component {
    render() {
        return (
            
            <div className="card_container">
                {/* <Post_card/> */}
                <Post alt="alt" title={"Emojilar haqida"}  text="some text"  tag="" img="https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg" />
                <Post alt="alt" title={"Ingliz tili tarixi"} text="" tag="" img="https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg"/>
                <Post alt="alt" title={"salom3"} text="bla bl bla"  tag="" img="https://assets.website-files.com/5f204aba8e0f187e7fb85a87/5f210a533185e7434d9efcab_hero%20img.jpg"/>
            </div>
        )
    }
}
export default Post_con