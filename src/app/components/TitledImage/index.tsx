import React from "react";
import classnames from "./titled-image.module.css";

interface TitledImageProps {
    titles: string[];
    image: string;
}

const TitledImage = ({ image, titles }: TitledImageProps) => {
    return (
        <div className={classnames.container}>
            <img src={image} />
            <div className={classnames.titleContainer}>
                {titles.map((title, index) => (
                    <React.Fragment key={`titles-${index}`}>
                        <a href="#" key={index} className={classnames.title}>
                            {title}
                        </a>
                        {titles.length > 1 && index < titles.length - 1 && (
                            <div className={classnames.divider} />
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default TitledImage;
