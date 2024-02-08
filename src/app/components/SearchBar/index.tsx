import React from "react";
import classnames from "./search-bar.module.css";

interface SearchBarProps {
    isBlue?: boolean;
}

const SearchBar = ({ isBlue }: SearchBarProps) => {
    return (
        <div className={`${classnames.container} ${isBlue && classnames.blue}`}>
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
