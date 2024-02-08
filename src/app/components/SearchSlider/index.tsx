"use client";
import React, { useEffect, useLayoutEffect } from "react";
import classnames from "./search-slider.module.css";
import Slider from "./Slider";
import { useDispatch, useSelector } from "react-redux";

const SearchSlider = () => {
    const data = useSelector((state: any) => state.resources.popularSearch);
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch({
            type: "FETCH_POPULAR_SEARCH",
            payload: [],
        });
    }, [dispatch]);

    return (
        <div className={classnames.container}>
            <span className={classnames.title}>Popüler aramalar</span>
            <Slider items={data} />
        </div>
    );
};

export default SearchSlider;
