import styles from "./contact.module.scss";
import React from "react";

export default function Contact() {

    return (
        <div className={styles.contact} id="contact">
            <div className="content-layer">

                <div className={styles.contact__header}>
                    <h2>Contact</h2>
                </div>
                <div className={styles.contact__content}>
                    <p>Whether you are looking for your next UI Designer/Developer to join your team, or you need a website to boost your business, let&apos;s get in touch!</p>
                    <button><a href="mailto:amandasimonds9@gmail.com">Email me</a></button>
                    <p>amandasimonds9@gmail.com</p>
                </div>
            </div>
        </div>
    )
}