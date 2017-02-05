import React from 'react';
import Video from 'react-videojs';
import { registerComponent } from 'meteor/nova:core';

const NrVideo = ({post}) => {
  return (
    <Video
      id={post._id}
      className="video-wrapper video-js" 
      controls 
      preload="auto" 
      width="640"
      height="264" 
      poster={post.thumbnailUrl}
      src={post.videoUrl}
      type="video/mp4"
    />
  )
}

NrVideo.displayName = "NrVideo";

registerComponent('NrVideo', NrVideo);