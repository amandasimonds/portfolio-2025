import styles from "./about.module.scss";
import React from "react";

export default function About() {

    return (
        <div className={styles.about} id="about">
            <div className={styles.about__header}>
                <h2>About</h2>
            </div>
            <div className={styles.about__content}>
                <p>I&apos;m a developer driven by a passion for crafting intuitive and beautiful user experiences. My favorite work is where design meets development—building experiences that are both visually striking and thoughtfully engineered for performance and usability.</p>
                <p>Currently, I&apos;m a designer/developer at United Airlines, creating a modernized app for United pilots that will make their lives easier when it comes to their work. Working with stakeholders, designers, and developers, I love to be the bridge that brings the vision to life.</p>
                <p>Previously, I worked on a design team to build a prototype for a data visualization platform. It was there that I learned the importance of user testing and having something tangible that users and product owners could see and interact with. Now, I&apos;ve been working with small businesses like <a href="https://www.mower-masters-llc.com">Mower Masters</a> and <a href="https://www.thesuperintendentlab.com">The Supertintendent Lab</a> to bring their work to the internet, and engage other users in their business. The power of a well functioning, visually pleasing website is strong and I love to see the immediate engagement a website/app can bring to an organization.</p>
                <p>In my spare time, I&apos;m mountain biking or exploring my city that I love so much, Knoxville, Tennessee</p>
                <p>If you&apos;re looking to add a design-minded engineer to your team, or someone to get your idea moving with a website, please get in touch and I&apos;d be happy to help get your vision into the real world.</p>
            </div>
        </div>
    )
}