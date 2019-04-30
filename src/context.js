// provider like any other component wrap everything here.
import React, { Component } from "react";

const Context = React.createContext();

export class Provider extends Component {
  state = {
    track_list: [
      {
        track: { track_name: "acdc" }
      },
      {
        track: { track_name: "ezpz" }
      }
    ],
    heading: "Top 10 tracks"
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
