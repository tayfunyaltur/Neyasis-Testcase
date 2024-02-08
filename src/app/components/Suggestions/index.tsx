"use client";
import React from "react";
import classnames from "./suggestions.module.css";
import { suggestions } from "@/app/constants";
import { useDispatch, useSelector } from "react-redux";

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
    const data = useSelector((state: any) => state.resources.suggestions || []);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch({ type: "FETCH_SUGGESTIONS" });
    }, [dispatch]);

    return (
        <div className={classnames.container}>
            <div className={classnames.mainTitle}>Sizin için iş ilanları</div>
            <div className={classnames.listContainer}>
                {data.map((suggestion: any, index: number) => (
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
