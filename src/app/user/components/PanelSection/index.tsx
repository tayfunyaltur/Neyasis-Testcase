import React from "react";
import classnames from "./panel-section.module.css";

interface PanelSectionProps {
    title: string;
    children?: React.ReactNode;
}

const PanelSection = ({ title, children }: PanelSectionProps) => {
    return (
        <div className={classnames.container}>
            <div className={classnames.title}>{title}</div>
            {children}
        </div>
    );
};

export default PanelSection;
