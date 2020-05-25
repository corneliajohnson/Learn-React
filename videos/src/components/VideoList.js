import React from "react";
import VideoItem from "./VideoItem";

//destructered props.videos & propsonVideoSelect in VideoList function parameter
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div>{renderedList}</div>;
};

export default VideoList;
