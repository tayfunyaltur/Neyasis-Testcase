import React from "react";
import classnames from "./search-bar.module.css";

const SearchBar = () => {
    return (
        <div className={classnames.container}>
            <img src="/icons/icon-filled-search.svg" alt="search" />
            <input
                type="text"
                className={classnames.input}
                placeholder="Is ara | Is, Sirket, Anahtar Kelime"
            />
        </div>
    );
};

export default SearchBar;
