import React from "react";
import classnames from "./resume.module.css";
import ResumeSection from "../ResumeSection";
import { useSelector } from "react-redux";
import { USER } from "@/app/types";
import dayjs from "dayjs";

const calculateDateDiff = (start?: string, end?: string) => {
    const yearDiff = dayjs(end).diff(start, "years");
    const monthDiff = dayjs(end).diff(start, "months") % 12;
    return `${yearDiff} Years ${monthDiff} Months`;
};

const Resume = () => {
    const { about, experiences, educations, certificates, talents, interests } =
        useSelector((state: { user: { user: USER } }) => state.user.user);

    return (
        <div className={classnames.container}>
            <h2>Profil</h2>
            <ResumeSection title="Profesyonel Bakış" isTitleBlue>
                <div className={classnames.about}>{about}</div>
            </ResumeSection>
            <ResumeSection title="Deneyim">
                {experiences?.map((experience, index) => (
                    <div key={index}>
                        <div className={classnames.experienceTitle}>
                            {experience.title}
                        </div>
                        <div className={classnames.experienceCompany}>
                            {experience.companyd}
                        </div>
                        <div className={classnames.experienceDates}>
                            {dayjs(experience.dates.start).format("MMM YYYY")} -{" "}
                            {experience.dates.end || "Present"} (
                            {calculateDateDiff(
                                experience.dates.start,
                                experience.dates.end
                            )}
                            )
                        </div>
                        <div className={classnames.experienceLocation}>
                            {` ${experience.location.neighborhood} - ${experience.location.city}/${experience.location.country}`}
                        </div>
                        <div className={classnames.experienceDescription}>
                            {experience.desc}
                        </div>
                    </div>
                ))}
            </ResumeSection>
            <ResumeSection title="Eğitim">
                {educations?.map((education, index) => (
                    <div key={`education-${index}`}>
                        <div className={classnames.educationSchool}>
                            {education.schoolname}
                        </div>
                        <div className={classnames.educationDegree}>
                            {education.degree}
                        </div>
                        <div className={classnames.educationField}>
                            {education.field}
                        </div>
                        <div className={classnames.educationDates}>
                            {dayjs(education.dates.start).format("YYYY")} -{" "}
                            {education.dates.end
                                ? dayjs(education.dates.end).format("YYYY")
                                : "Present"}
                        </div>
                    </div>
                ))}
            </ResumeSection>
            <ResumeSection title="Sertifikalar">
                {certificates?.map((certificate, index) => (
                    <div key={`certificate-${index}`}>
                        <div className={classnames.certificateName}>
                            {certificate.name}
                        </div>
                        <div className={classnames.organization}>
                            {certificate.organization}
                        </div>
                        <div className={classnames.certificateDates}>
                            {dayjs(certificate.date).format("MMMM YYYY")}
                        </div>
                    </div>
                ))}
            </ResumeSection>
            <ResumeSection title="Yetenekler">
                <div className={classnames.gridList}>
                    {talents?.map((talend, index) => (
                        <div className={classnames.listItem}>
                            <img src="/assets/noun-list.webp" alt="check" />
                            <div>{talend.name}</div>
                            <div>({talend.year} years)</div>
                        </div>
                    ))}
                </div>
            </ResumeSection>
            <ResumeSection title="İlgi Alanları">
                <div className={classnames.gridList}>
                    {interests?.map((interest, index) => (
                        <div className={classnames.listItem}>
                            <img src="/assets/noun-list.webp" alt="check" />
                            <div>{interest}</div>
                        </div>
                    ))}
                </div>
            </ResumeSection>
        </div>
    );
};

export default Resume;
