import React from "react";
import classnames from "./search.module.css";
import SearchBar from "../SearchBar";
import Button from "../Button";

const Search = () => {
    return (
        <div className={classnames.searchContainer}>
            <SearchBar />
            <div className={classnames.buttonContainer}>
                <Button type="primary" buttonSize="lg">
                    <img src="/assets/find.png" alt="find" />
                </Button>
                <a href="#">Detaylı Arama</a>
            </div>
        </div>
    );
};

export default Search;
