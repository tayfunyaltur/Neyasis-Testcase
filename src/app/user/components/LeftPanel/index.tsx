import React from "react";
import classnames from "./left-panel.module.css";
import PanelSection from "../PanelSection";
import { useSelector } from "react-redux";
import { USER } from "@/app/types";
import _ from "lodash";
import { favicos } from "@/app/constants";

const LeftPanel = () => {
    const { details, socials, docs, savedSearches, applies } = useSelector(
        (state: { user: { user: USER } }) => state.user.user
    );

    return (
        <div className={classnames.panelContainer}>
            <div>
                <div className={classnames.imageContainer}>
                    <div>
                        <img width="24px" src="./assets/edit-icon.png" />
                    </div>
                    <img
                        width="260"
                        src={
                            details?.profileImage
                                ? `/assets/${details?.profileImage}`
                                : "https://via.placeholder.com/150"
                        }
                        alt="placeholder"
                    />
                </div>
                <div className={classnames.userDetails}>
                    <div>{details?.name}</div>
                    <div>{details?.title}</div>
                    <div>
                        <span>{details?.location.country}</span>
                        <span>{details?.location.city}</span>
                        <span>{details?.location.neighborhood}</span>
                    </div>
                    <div>{details?.email}</div>
                    <div>{details?.phone}</div>
                    <a href="#">Find CV'mi indir</a>
                    <a href="#">Profili Duzenle</a>
                </div>
            </div>
            <PanelSection title="Web Sitesi">
                <>
                    <div className={classnames.websiteSection}>
                        {Object.keys(socials || {}).map((key: string) =>
                            _.get(socials, key) ? (
                                <a key={key} href={`${_.get(socials, key)}`}>
                                    <img
                                        width="24px"
                                        src={_.get(favicos, key)}
                                    />
                                </a>
                            ) : null
                        )}
                    </div>
                    <a href="#" className={classnames.customAnchor}>
                        Duzenle
                    </a>
                </>
            </PanelSection>
            <PanelSection title="Dokumanlar">
                <>
                    {docs?.map((doc: any) => (
                        <div className={classnames.docContainer}>
                            {doc.split(".")[1] === "pdf" ? (
                                <img
                                    width="24px"
                                    src="./assets/icon-file-pdf.svg"
                                />
                            ) : (
                                <img
                                    width="24px"
                                    src="./assets/icon-file.png"
                                />
                            )}
                            <div>{doc}</div>
                            <img width="16px" src="./assets/icon-cross.png" />
                        </div>
                    ))}
                    <a href="#" className={classnames.customAnchor}>
                        Başka bir doküman ekle
                    </a>
                </>
            </PanelSection>
            <PanelSection title="Kaydedilen Aaramalarim">
                {savedSearches?.map((doc: any) => (
                    <div className={classnames.docContainer}>
                        <img width="24px" src="./assets/icon-search.webp" />
                        <div>{doc}</div>
                        <img width="16px" src="./assets/icon-cross.png" />
                    </div>
                ))}
            </PanelSection>
            <PanelSection title="Basvurularim">
                <>
                    {applies?.map((doc: any) => (
                        <div className={classnames.docContainer}>
                            <img width="24px" src="./assets/icon-search.webp" />
                            <div>{doc}</div>
                            <img width="16px" src="./assets/icon-cross.png" />
                        </div>
                    ))}
                    <a href="#" className={classnames.customAnchor}>
                        Tümünü Gör
                    </a>
                </>
            </PanelSection>
        </div>
    );
};

export default LeftPanel;
