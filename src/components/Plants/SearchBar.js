import React from 'react'

const SearchBar = () => {
    return (
        <div className="search-bar ui segment">
            <form className="ui form">
                <label>Search Plants</label>
                <div className="field">
                    <input type="text"></input>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
