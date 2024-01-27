import React from "react";
import classnames from "./search-slider.module.css";
import Slider from "./Slider";

interface sliderProps {
    slideItems: string[];
}

const SearchSlider = ({ slideItems }: sliderProps) => {
    return (
        <div className={classnames.container}>
            <span className={classnames.title}>Popüler aramalar</span>
            <Slider items={slideItems} />
        </div>
    );
};

export default SearchSlider;
