import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/playpause';
import Timer from '../components/timer';
import VideoControls from '../components/videoControls';
import ProgressBar from '../components/progressBar';
import { formattedTime } from '../../utilities';

class VideoPlayer extends Component {
    
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        durationFloat: 0,
        timeFloat: 0
    }

    togglePlay = () => {
        this.setState(prevState => ({
            pause: !prevState.pause	
        }))

        console.log(this.state)
    }

    componentDidMount(){
        this.setState({
            pause: (!this.props.autoplay)
        })
    }

    handleLoadedMetadata = event => {
        this.video = event.target;
        this.setState({
            duration: this.video.duration
        });
      
    }

    handleTimeUpdate = event => {
        this.setState({
            currentTime: this.video.currentTime
        })
    }

    handleProgressChange = event => {
        // event.target.value
        this.video.currentTime = event.target.value;
    }

    render(){
      return (
          <VideoPlayerLayout>
              <Title 
                title="Prueba"
              />
              <VideoControls>
                <PlayPause 
                    pause={this.state.pause}
                    handleClick={this.togglePlay}
                />
                <Timer 
                    duration={formattedTime(this.state.duration)}
                    currentTime={formattedTime(this.state.currentTime)}
                />
                <ProgressBar 
                    duration={this.state.duration}
                    value={this.state.currentTime}
                    handleProgressChange={this.handleProgressChange}
                />
              </VideoControls>
              
              <Video
                 autoplay={this.props.autoplay}
                 pause={this.state.pause}
                 handleLoadedMetadata={this.handleLoadedMetadata}
                 handleTimeUpdate={this.handleTimeUpdate}
                 src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
              />
          </VideoPlayerLayout>
      )  
    }
}

export default VideoPlayer;