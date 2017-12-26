import React from 'react';
import './homeLayout.css';

const homeLayout = (props) => {
    return (
        <section className="HomeLayout">
            {props.children}
        </section>
    )
}

export default homeLayout;