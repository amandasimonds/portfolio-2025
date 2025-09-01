import Mountain from "@/app/components/mountains/mountains";
import styles from "./experience.module.scss";
import React from "react";

const experience = [
    {
        length: "Sep 2023 - Present | 2 yrs",
        positions: [
            {
                position: "UI/UX Designer & Developer",
                length: "Sep 2023 — Present",
                description: "Design and development of features for a modernized crew employee portal. Working in an Agile environment, collaborating with cross-functional teams to deliver user-centric solutions that enhance the overall experience for United Airlines crew members.",
                skills: [
                    "Angular",
                    "SCSS",
                    "Figma",
                ]
            },
        ],
        company: "United Airlines",
        link: "united.com",
    },
    {
        length: "Oct 2020 — May 2023 | 2 yrs 8 mos",
        positions: [
            {
                position: "UI/UX Designer & Developer",
                length: "Apr 2021 — May 2023",
                description: "Design and development of features for a modernized crew employee portal. Working in an Agile environment, collaborating with cross-functional teams to deliver user-centric solutions that enhance the overall experience for United Airlines crew members.",
                skills: [
                    "Angular",
                    "AWS",
                    "SCSS",
                    "Figma",
                ]
            },
            {
                position: "QA Test Engineer",
                length: "Oct 2020 — Apr 2021",
                description: "Design and development of features for a modernized crew employee portal. Working in an Agile environment, collaborating with cross-functional teams to deliver user-centric solutions that enhance the overall experience for United Airlines crew members.",
                skills: [
                    "Angular",
                    "AWS",
                    "Cypress"
                ]
            },
        ],
        company: "S&P Global",
        link: "spgglobal.com",
    },
];


export default function Experience() {

    return (
        <div className={styles.experience} id="experience">
            <Mountain />
            <div className="content-layer">
                <div className={styles.experience__header}>
                    <h2>Experience</h2>
                </div>
                <div className={styles.experience__content}>
                    {experience.map((item, idx) => (
                        <div key={idx} className={styles.experience__item}>
                            <span className={styles.heading}>
                                <h3><a href={`https://${item.link}`} target="_blank" rel="noopener noreferrer" className="highlight">{item.company}</a></h3>
                                <span className={styles.experience__length}>{item.length}</span>
                            </span>

                            {item.positions.map((position, posIdx) => (
                                <div key={posIdx} className={styles.experience__position}>
                                    <span className={styles.experience__bullet}>&bull;</span>
                                    <h4 className={`${(item.positions.length > 1 && posIdx !== item.positions.length - 1) && styles.experience__multiPosition} font-bold`}>{position.position}</h4>
                                    {item.positions.length > 1 &&
                                        <span>{position.length}</span>
                                    }
                                    <p>{position.description}</p>
                                    <div className={styles.experience__skills}>
                                        {position.skills.map((skill, skillIndex) => (
                                            <span key={skillIndex} className="chip">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}