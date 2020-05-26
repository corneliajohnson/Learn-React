import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ selectedSong }) => {
  //if song is null or dose not exist
  if (!selectedSong) {
    return <div>Select a Song</div>;
  }

  return (
    <div>
      <h3>Detail for:</h3>
      <p>Title: {selectedSong.title} </p>
      <p>Duration: {selectedSong.duration}</p>
    </div>
  );

  return <div></div>;
};

const mapStateToProps = (state) => {
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
