import React from 'react';
import Video from 'react-videojs';

const NrVideo = ({post}) => {
  return (
    <Video
      id={post._id}
      className="video-js" 
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

export default NrVideo;