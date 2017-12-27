import React from 'react';
import './search.css';

const Search = (props) => (
        <form className="Search">
            <input 
                type="text"
                placeholder="Buscar"
                className="Search-input"
            />
        </form>
)

export default Search;