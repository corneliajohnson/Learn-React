import React, { Component } from "react";
import SearchBar from "./SearchBar";
import youtube from "../api/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = { videos: [], selectedVideo: null };

  //default search when application begins
  componentDidMount() {
    this.onInputSubmit("porsche");
  }

  onInputSubmit = async (input) => {
    const response = await youtube.get("/search", {
      params: {
        q: input,
      },
    });

    this.setState({
      videos: response.data.items,
      //automatically display the first video from search
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container" style={{ marginTop: "10%" }}>
        <SearchBar onUserSubmit={this.onInputSubmit} />
        <div className="row">
          <div className="col s12 m8">
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className="col s12 m4">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
