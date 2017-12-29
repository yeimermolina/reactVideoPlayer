import React from 'react';
import './fullScreen.css';
import FullScreenIcon from '../../icons/components/full-screen';

const FullScreen = (props) => (
    <div 
        className="FullScreen"
        onClick={props.handleFullScreenClick}
    >
        <FullScreenIcon
            color='white'
            size={25}
        />
    </div>
)

export default FullScreen;