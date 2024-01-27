"use client";
import React, { useState } from "react";
import classnames from "./carousel.module.css";

interface CarouselItems {
    position: string;
    company: {
        name: string;
        logo: string;
    };
}

const CarouselItem = ({ position, company }: CarouselItems) => {
    return (
        <div className={classnames.itemContainer}>
            <div className={classnames.position}>{position}</div>
            <div className={classnames.company}>{company.name}</div>
            <img src={`/assets/${company.logo}`} alt={company.name} />
        </div>
    );
};

interface CarouselProps {
    title: string;
    items: CarouselItems[];
}

const Carousel = ({ title, items }: CarouselProps) => {
    const [step, setStep] = useState(0);

    const scroll = (direction: "left" | "right") => {
        const scrollContainer = document.getElementById("scrollContainer");
        if (!scrollContainer) return;
        if (direction === "left" && step === 0) return;
        if (direction === "right" && step === items.length - 1) return;
        scrollContainer.scrollTo({
            left: direction === "right" ? (step + 1) * 192 : (step - 1) * 192,
            behavior: "smooth",
        });
        setStep((prev) => (direction === "left" ? prev - 1 : prev + 1));
    };

    return (
        <div className={classnames.container}>
            <div className={classnames.title}>{title}</div>
            <div className={classnames.carouselContainer}>
                <button onClick={() => scroll("left")} disabled={step === 0}>
                    <img src="/icons/icon-filled-arrow-left.svg" alt="left" />
                </button>
                <div
                    className={classnames.scrollContainer}
                    id="scrollContainer"
                >
                    <div className={classnames.innerContainer}>
                        {items.map((item, index) => (
                            <CarouselItem
                                key={index}
                                company={item.company}
                                position={item.position}
                            />
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => scroll("right")}
                    disabled={step >= items.length - 6}
                >
                    <img src="/icons/icon-filled-arrow-left.svg" alt="right" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
