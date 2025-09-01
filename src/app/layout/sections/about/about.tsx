import styles from "./about.module.scss";
import React from "react";

export default function About() {

    return (
        <div className={styles.about} id="about">
            <div className={styles.about__header}>
                <h2>About</h2>
            </div>
            <div className={styles.about__content}>
                <p>I&apos;m a developer driven by a passion for crafting intuitive and beautiful user experiences. My favorite work is <b>where design meets development</b>—building experiences that are both visually engaging and thoughtfully engineered for performance and usability.</p>
                <p>Currently, I&apos;m a <b>designer/developer</b> at <a className="link" href="https://www.united.com" target="_blank">United Airlines</a>, building a modernized app for United pilots that streamlines their day-to-day tasks and makes the experience more intuitive for new users. Working with stakeholders, designers, and developers, I love to be the bridge that brings the vision to life.</p>
                <p>Previously, I worked on a design team to build a prototype for a data visualization platform. There, I learned the importance of user testing and having something tangible that users and product owners could interact with for the design process. Now, I&apos;ve been working with small businesses like <a className="link" href="https://www.mower-masters-llc.com" target="_blank">Mower Masters</a> and <a className="link" href="https://www.thesuperintendentlab.com" target="_blank">The Supertintendent Lab</a> to bring their work to the web and connect with people. The power of a well functioning, visually pleasing website is strong and I love to see the immediate engagement a website/app can bring to an organization.</p>
                <p>In my spare time, I&apos;m mountain biking, seeing live music, or exploring my city that I love dearly: Knoxville, Tennessee.</p>
                <p>If you&apos;re looking for a <b>design-focused engineer</b> to join your team, or someone to help launch your business with a compelling website, I&apos;d love to connect and help bring your vision into reality.</p>
            </div>
        </div>
    )
}