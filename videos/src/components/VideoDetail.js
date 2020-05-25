import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="card-panel grey lighten-5 z-depth-1">
        <div>
          <iframe title="video player" src={videoSrc}></iframe>
        </div>
        <span className="card-title">
          <h4>{video.snippet.title}</h4>
          <p>{video.snippet.description}</p>
        </span>
      </div>
    </div>
  );
};

export default VideoDetail;
