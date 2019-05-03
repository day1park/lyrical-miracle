import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import logo from "../layout/music.svg";

class Search extends Component {
  state = {
    trackTitle: ""
  };
  render() {
    return (
      <Consumer>
        {value => {
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <img src={logo} alt="Logo" style={{ height: "60px" }} /> Search
                for a Japanese Song
              </h1>
              <p className="lead text-center">Get the lyrics for any song</p>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
