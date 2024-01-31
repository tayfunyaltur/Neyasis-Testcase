"use client";
import React, { useLayoutEffect, useState } from "react";
import classnames from "./carousel.module.css";
import { useDispatch, useSelector } from "react-redux";

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
}

const Carousel = ({ title }: CarouselProps) => {
    const [step, setStep] = useState(0);
    const data = useSelector(
        (state: any) => state.resources.openPositions || []
    );

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch({ type: "FETCH_OPEN_POSITIONS" });
    }, [dispatch]);

    const scroll = (direction: "left" | "right") => {
        const scrollContainer = document.getElementById("scrollContainer");
        if (!scrollContainer) return;
        if (direction === "left" && step === 0) return;
        if (direction === "right" && step === data.length - 1) return;
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
                        {data.map((item: any, index: number) => (
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
                    disabled={step >= data.length - 6}
                >
                    <img src="/icons/icon-filled-arrow-left.svg" alt="right" />
                </button>
            </div>
        </div>
    );
};

export default Carousel;
