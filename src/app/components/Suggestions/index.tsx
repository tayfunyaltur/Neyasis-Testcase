import React from "react";
import classnames from "./suggestions.module.css";
import { suggestions } from "@/app/constants";

const SuggestionList = ({
    title,
    suggestions,
}: {
    title: string;
    suggestions: string[];
}) => {
    return (
        <div>
            <div className={classnames.title}>{title}</div>
            <ul>
                {suggestions.map((suggestion, index) => (
                    <li key={index} className={classnames.suggestionItem}>
                        <a href="#">{suggestion}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const Suggestions = () => {
    return (
        <div className={classnames.container}>
            <div className={classnames.mainTitle}>Sizin için iş ilanları</div>
            <div className={classnames.listContainer}>
                {suggestions.map((suggestion, index) => (
                    <SuggestionList
                        key={index}
                        title={suggestion.title}
                        suggestions={suggestion.items}
                    />
                ))}
            </div>
        </div>
    );
};

export default Suggestions;
