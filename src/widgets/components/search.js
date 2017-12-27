import React from 'react';
import './search.css';

const Search = (props) => (
        <form 
            className="Search"
            onSubmit={props.handleSubmit}
        >
            <input 
                ref={props.setRef}
                type="text"
                placeholder="Buscar"
                className="Search-input"
                name="search"
                // defaultValue="Luis"
                onChange={props.handleInputChange}
                value={props.value}
            />
        </form>
)

export default Search;