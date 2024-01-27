import React from "react";
import classnames from "./our-partners.module.css";
import { partners } from "@/app/constants";

const OurPartners = () => {
    return (
        <div className={classnames.container}>
            {partners.map((partner, index) => (
                <img key={index} src={`/assets/${partner}`} alt={partner} />
            ))}
        </div>
    );
};

export default OurPartners;
