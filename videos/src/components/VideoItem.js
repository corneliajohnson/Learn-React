import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div>
      <div onClick={() => onVideoSelect(video)} className="row video-item">
        <div className="col s12">
          <img
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
        </div>
        <div className="col s12">
          <p>{video.snippet.title}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
