import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Media from './src/playlist/components/media';

class App extends Component{
    render(){
        return (
                <Media 
                    title="React Fundamentals"
                    author="@yeimergabriel"
                    image="./images/covers/bitcoin.jpg"
                />
        )
    }
}

ReactDOM.render(<App />,document.getElementById('app'))