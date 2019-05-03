import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import logo from "../layout/music.svg";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  onChange = e => {
    this.setState({
      trackTitle: e.target.value
    });
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
              <p className="lead text-center">
                Get partial lyrics for any song because this only uses a free
                API
              </p>
              <form>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Song title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
