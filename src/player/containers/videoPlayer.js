import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/playpause';
import Timer from '../components/timer';
import VideoControls from '../components/videoControls';

class VideoPlayer extends Component {
    
    state = {
        pause: true,
        duration: 0
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
        console.log(this.video)
        this.setState({
            duration: this.video.duration
        });
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
                    duration={this.state.duration}
                />
              </VideoControls>
              
              <Video
                 autoplay={this.props.autoplay}
                 pause={this.state.pause}
                 handleLoadedMetadata={this.handleLoadedMetadata}
                 src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
              />
          </VideoPlayerLayout>
      )  
    }
}

export default VideoPlayer;