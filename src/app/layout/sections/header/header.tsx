'use client'

import { scrollToSection } from "@/app/utils/utils";
import styles from "./header.module.scss";
import React from "react";

export default function Header() {

    return (
        <div className={styles.header} id="home">
            <div className="content-layer">
                <div className={styles.header__content}>
                    <div className={styles.header__text}>
                        <h1>Hi! I&apos;m Amanda</h1>
                        <span className="header-subtitle subtitle accent">UI/UX Designer & Developer</span>
                        <div className={`${styles.header__image} ${styles.header__image__mobile}`}>
                            <img src="amanda-simonds.jpg" alt="amanda simonds brannock ui/ux designer frontend developer" />
                        </div>
                        <p className={styles.header__text__caption}>I build and design exceptional user experiences, that combine well-architected engineering with beautifully intuitive designs.</p>
                        <div className={styles.header__socials}>
                            <a href="https://github.com/amandasimonds" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/amandasimonds/" target="_blank">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="/AmandaSimondsResume2025.pdf" target="_blank">
                                <i className="material-symbols-outlined">demography</i>
                            </a>
                        </div>

                    </div>
                    <div className={`${styles.header__image} ${styles.header__image__desktop}`}>
                        <img src="amanda-simonds.jpg" alt="" />
                    </div>
                </div>
                <div className={styles.header__ctas}>
                    <button onClick={() => scrollToSection("work")}>See my work</button>
                    <button onClick={() => scrollToSection("contact")}>Contact me</button>
                </div>
            </div>
        </div>
    )
}