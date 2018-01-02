import React from 'react';
import logo from '../../../images/logo.png';
import './related.css';

function Related(props){
    return (
        <div className="Related">
            <img src={logo} alt="" width={250} />
            <h3>New Videos</h3>
            <ul>
                <li>Video 1</li>
                <li>Video 2</li>
                <li>Video 3</li>
                <li>Video 4</li>
                <li>Video 5</li>
                <li>Video 6</li>
                <li>Video 7</li>
            </ul>

            <h3>Lorem ipsu</h3>
            <ul>
                <li>Video 1</li>
                <li>Video 2</li>
                <li>Video 3</li>
                <li>Video 4</li>
                <li>Video 5</li>
                <li>Video 6</li>
                <li>Video 7</li>
            </ul>
        </div>
    );
}

export default Related;