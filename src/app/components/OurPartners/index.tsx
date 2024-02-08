"use client";
import React, { useLayoutEffect } from "react";
import classnames from "./our-partners.module.css";
import { partners } from "@/app/constants";
import { useDispatch, useSelector } from "react-redux";

const OurPartners = () => {
    const data = useSelector((state: any) => state.resources.partnerURLS || []);

    const dispatch = useDispatch();

    useLayoutEffect(() => {
        dispatch({ type: "FETCH_PARTNERS" });
    }, [dispatch]);

    return (
        <div className={classnames.container}>
            {data.map((partner: string, index: number) => (
                <img key={index} src={`/assets/${partner}`} alt={partner} />
            ))}
        </div>
    );
};

export default OurPartners;
