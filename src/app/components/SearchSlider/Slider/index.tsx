import React from "react";
import classnames from "./slider.module.css";

const SliderItem = ({ name }: { name: string }) => {
    return <div className={classnames.itemContainer}>{name}</div>;
};

const Slider = ({ items }: { items: string[] }) => {
    return (
        <div className={classnames.container}>
            <div className={classnames.slideContainer}>
                {items.map((item, index) => (
                    <SliderItem key={`popular-searches-${index}`} name={item} />
                ))}
                <div></div>
            </div>
            <div className={classnames.fade} />
        </div>
    );
};

export default Slider;
