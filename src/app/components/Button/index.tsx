import React from "react";
import classnames from "./button.module.css";

type ButtonProps = {
    type?: "primary" | "outline" | "blue-outline";
    buttonSize?: "sm" | "md" | "lg";
};

const classes = {
    primary: classnames.primary,
    outline: classnames.outline,
    "blue-outline": classnames.blueOutline,
    sm: classnames.sm,
    md: classnames.md,
    lg: classnames.lg,
};

const Button = ({
    children,
    type = "primary",
    buttonSize = "md",
    ...props
}: React.HTMLProps<HTMLButtonElement> & ButtonProps) => {
    return (
        <button
            {...props}
            className={`${classnames.button} ${classes[type]} ${classes[buttonSize]}`}
        >
            {children}
        </button>
    );
};

export default Button;
