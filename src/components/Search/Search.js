import React, { Component } from 'react'
import "./Search.css"

    
class Search extends Component {
    render() {
        return (
            <div className="search_con">
      <button className="search_sel"  onClick={(x) => x.target.innerHTML === "ENG → UZ"? x.target.innerHTML ="UZ → ENG":x.target.innerHTML ="ENG → UZ"}>ENG → UZ</button>
                <input className="search_inp"/>
                <button className="search_btn"><i className="fas fa-search"></i></button>
            </div>
        ) 
    }
}

export default Search

