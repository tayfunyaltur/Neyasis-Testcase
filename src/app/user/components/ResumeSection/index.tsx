import React from "react";
import classnames from "./resume-section.module.css";

interface ResumeSectionProps {
    title: string;
    isTitleBlue?: boolean;
    children?: React.ReactNode;
}

const ResumeSection = ({
    title,
    isTitleBlue,
    children,
}: ResumeSectionProps) => {
    return (
        <div>
            <div
                className={`${classnames.title} ${
                    isTitleBlue && classnames.titleBlue
                }`}
            >
                {title}
                <a href="#">Duzenle</a>
            </div>
            {children}
        </div>
    );
};

export default ResumeSection;
