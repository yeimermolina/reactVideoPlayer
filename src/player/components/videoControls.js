import React from 'react';
import './videoControls.css';

const VideoControls = (props) => (
    <div className="VideoControls">
        {props.children}
    </div>
)

export default VideoControls;