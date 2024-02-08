"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LeftPanel from "./components/LeftPanel";
import classnames from "./user.module.css";
import Resume from "./components/Resume/page";
import Footer from "../components/Footer";
import { USER } from "../types";
import Search from "../components/Searh";

const User = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: { user: { user: USER } }) => state.user);

    useEffect(() => {
        dispatch({ type: "FETCH_USER" });
    }, [dispatch]);

    return (
        <div>
            <div className={classnames.headerContainer}>
                <img
                    src="/assets/logo.png"
                    alt="logo"
                    className={classnames.logo}
                />
                <div className={classnames.userNavigator}>
                    <div className={classnames.userInfo}>
                        <div>{user.user.details?.name}</div>
                        <div>Textigma'da Kurucu</div>
                    </div>
                    <div>
                        <img height="64" src="/assets/Mock_image.png" />
                    </div>
                </div>
            </div>
            <div className={classnames.searchContainer}>
                <Search isBlue />
            </div>
            <div className={classnames.content}>
                <LeftPanel />
                <Resume />
            </div>
        </div>
    );
};

export default User;
