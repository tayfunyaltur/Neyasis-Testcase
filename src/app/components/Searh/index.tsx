import React from "react";
import classnames from "./search.module.css";
import SearchBar from "../SearchBar";
import Button from "../Button";

interface SearchProps {
    isBlue?: boolean;
}

const Search = ({ isBlue }: SearchProps) => {
    return (
        <div
            className={`${classnames.searchContainer} ${
                isBlue && classnames.blueContainer
            }`}
        >
            <SearchBar isBlue={isBlue} />
            <div className={classnames.buttonContainer}>
                <Button type="blue-outline" buttonSize="lg">
                    <img src="/assets/find.png" alt="find" />
                </Button>
                {!isBlue && <a href="#">Detaylı Arama</a>}
            </div>
        </div>
    );
};

export default Search;
