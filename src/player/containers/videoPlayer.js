import React, { Component } from 'react';
import VideoPlayerLayout from '../components/VideoPlayerLayout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/playpause';

class VideoPlayer extends Component {
    
    state = {
        pause: true
    }

    togglePlay = () => {
        this.setState(prevState => ({
            pause: !prevState.pause	
        }))

        console.log(this.state)
    }

    render(){
      return (
          <VideoPlayerLayout>
              <Title 
                title="Prueba"
              />
              <PlayPause 
                pause={this.state.pause}
                handleClick={this.togglePlay}
              />
              <Video
                 autoplay={true}
                 src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
              />
          </VideoPlayerLayout>
      )  
    }
}

export default VideoPlayer;