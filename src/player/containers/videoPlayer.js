import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/playpause';
import Timer from '../components/timer';
import VideoControls from '../components/videoControls';
import ProgressBar from '../components/progressBar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import { formattedTime } from '../../utilities';

class VideoPlayer extends Component {
    
    state = {
        pause: true,
        duration: 0,
        currentTime: 0,
        loading: false,
        lastVolume: 1,
        volumeValue: 1
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

    handleSeeked = event => {
        this.setState({loading: false});
    }

    handleSeeking = event => {
        this.setState({loading: true});
    }

    handleVolumeChange = event => {
        
        this.video.volume = event.target.value
        this.setState({
            volumeValue: this.video.volume
        })
    }

    handleVolumeClick = () => {
        this.video.volume = 0
        this.setState({
            volumeValue: this.video.volume
        })
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

                <Volume
                    handleVolumeChange={this.handleVolumeChange}
                    handleVolumeClick={this.handleVolumeClick}
                    value={this.state.volumeValue}
                />
              </VideoControls>
              
              <Video
                 autoplay={this.props.autoplay}
                 pause={this.state.pause}
                 handleLoadedMetadata={this.handleLoadedMetadata}
                 handleTimeUpdate={this.handleTimeUpdate}
                 handleSeeked={this.handleSeeked}
                 handleSeeking={this.handleSeeking}
                 src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
              />
              {this.state.loading && <Spinner />}
          </VideoPlayerLayout>
      )  
    }
}

export default VideoPlayer;