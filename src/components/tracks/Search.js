import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "../../context";
import logo from "../layout/music.svg";

class Search extends Component {
  state = {
    trackTitle: ""
  };

  findSong = (dispatch, e) => {
    e.preventDefault();

    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track_artist=${
          this.state.trackTitle
        }&page_size=10&page=1&s_track_rating=desc&apikey=${
          process.env.REACT_APP_MM_KEY
        }`
      )
      .then(res => {
        // console.log(res.data);
        dispatch({
          type: "SEARCH_TRACKS",
          payload: res.data.message.body.track_list
        });
        this.setState({
          trackTitle: ""
        });
      })
      .catch(err => console.log(err));
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
          const { dispatch } = value;
          return (
            <div className="card card-body mb-4 p-4">
              <h1 className="display-4 text-center">
                <img src={logo} alt="Logo" style={{ height: "60px" }} /> Search
                on the Japanese Music Chart
              </h1>
              <p className="lead text-center">
                Get partial lyrics for any song because this only uses a free
                API
              </p>
              <form onSubmit={this.findSong.bind(this, dispatch)}>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="Artist or Title..."
                    name="trackTitle"
                    value={this.state.trackTitle}
                    onChange={this.onChange}
                  />
                </div>
                <button
                  className="btn btn-info btn-lg btn-block mb-5"
                  type="submit"
                >
                  Get Song Lyrics
                </button>
              </form>
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Search;
