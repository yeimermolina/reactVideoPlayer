import React from 'react';
import './VideoPlayerLayout.css';

const VideoPlayerLayout = (props) => (
    <div 
        className="VideoPlayerLayout"
        ref={props.setRef}
    >
        {props.children}
    </div>
)

export default VideoPlayerLayout;