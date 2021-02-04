import React from 'react';
// import "./styles.css";
import VideoListItem from '../VideoListItem';




const VideoList = (props) =>{
  const [isActive, setIsActive] = React.useState(false);

    const videoItems = props.videos.map((video) => {
    return <VideoListItem
              onVideoSelect = {props.onVideoSelect}
              key={video.etag}
              video={video}
            />;
  });
  return (
    <div>
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
    
   
   
    </div>
  )
}

export default VideoList;
