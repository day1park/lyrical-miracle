// page for the route to lyrics
import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";

class Lyrics extends Component {
  state = {
    track: {},
    lyrics: {}
  };

  componentDidMount() {
    // get from params that match lyrics id
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
          this.props.match.params.id
        }&apikey=${process.env.REACT_APP_MM_KEY}`
      )
      .then(res => {
        // console.log(res.data);
        this.setState({ lyrics: res.data.message.body.lyrics });

        return axios.get(
          `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${
            this.props.match.params.id
          }&apikey=${process.env.REACT_APP_MM_KEY}`
        );
      })
      .then(res => {
        // console.log(res.data);
        this.setState({
          track: res.data.message.body.track
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    const { lyrics, track } = this.state;
    if (
      track === undefined ||
      lyrics === undefined ||
      Object.keys(track).length === 0 ||
      Object.keys(track).length === 0
    ) {
      return <Spinner />;
    } else {
      return (
        <React.Fragment>
          <Link to="/" className="btn btn-secondary btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track_name} by{" "}
              <span className="text-primary">{track.artist_name}</span>
            </h5>
            <div className="card-body">
              <p className="card-text">{lyrics.lyrics_body}</p>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>
                <i className="fas fa-music" /> Song Genre
              </strong>
              :{" "}
              {track.primary_genres.music_genre_list.length !== 0
                ? track.primary_genres.music_genre_list[0].music_genre
                    .music_genre_name
                : "N/A"}
            </li>
            <li className="list-group-item">
              <strong>
                <i class="fas fa-hand-middle-finger" /> Explicit Words
              </strong>
              : {track.explicit === 0 ? "None" : "Included"}
            </li>
            <li className="list-group-item">
              <strong>
                <i className="fas fa-compact-disc" /> Album
              </strong>
              : {track.album_name}
            </li>
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default Lyrics;
