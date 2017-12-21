import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

class App extends Component{
    render(){
        return (
                <Media />
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))