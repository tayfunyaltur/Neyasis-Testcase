import React from "react";
import classnames from "./button.module.css";

type ButtonProps = {
    type?: "primary" | "outline";
    buttonSize?: "sm" | "md" | "lg";
};

const Button = ({
    children,
    type = "primary",
    buttonSize = "md",
}: React.HTMLProps<HTMLButtonElement> & ButtonProps) => {
    const classes = {
        primary: classnames.primary,
        outline: classnames.outline,
        sm: classnames.sm,
        md: classnames.md,
        lg: classnames.lg,
    };

    return (
        <button
            className={`${classnames.button} ${classes[type]} ${classes[buttonSize]}`}
        >
            {children}
        </button>
    );
};

export default Button;
