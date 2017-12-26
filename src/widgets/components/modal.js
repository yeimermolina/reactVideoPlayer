import React from 'react';
import './modal.css';

const Modal = (props) => {
    return (
        <div className="Modal">
            {props.children}
            <button onClick={props.handleClick}>Cerrar</button>
        </div>
    )
}

export default Modal;