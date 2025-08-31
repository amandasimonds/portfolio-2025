'use client'

import { scrollToSection } from "@/app/utils/utils";
import styles from "./header.module.scss";
import React from "react";

export default function Header() {

    return (
        <div className={styles.header} id="home">
            <div className={styles.header__content}>
                <div className={styles.header__text}>
                    <h1>Hi! I'm Amanda</h1>
                    <span className="header-subtitle subtitle accent">UI/UX Designer & Developer</span>
                    <div className={styles.header__image__mobile}>
                        <img src="portrait.png" alt="" />
                    </div>
                    <p>I build and design exceptional user interfaces, that combine thoughtful engineering with robust UIUX.</p>
                    <div className="icons">
                        <i className="fa-brands fa-github"></i>
                    </div>

                </div>
                <div className={`${styles.header__image} ${styles.header__image__desktop}`}>
                    <img src="portrait.png" alt="" />
                </div>
            </div>
            <div className={styles.header__ctas}>
                <button onClick={() => scrollToSection("work")}>See my work</button>
                <button onClick={() => scrollToSection("contact")}>Contact me</button>
            </div>
        </div>
    )
}