'use client'

import React from "react";
import styles from "./navigation.module.scss";
import Scrim from "@/app/components/scrim/scrim";
import { scrollToSection } from "@/app/utils/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "900"],
});

export default function Navigation() {
  const navLinks = [
    { link: "about", label: "about" },
    { link: "experience", label: "experience" },
    { link: "work", label: "work" },
    { link: "contact", label: "contact" },
    { link: "", extLink: "/AmandaSimondsResume2025.pdf", label: "resume", target: "_blank", rel: "noopener noreferrer" },
  ];

  const [navmenuOpen, setNavMenuOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("september-theme");

  function changeTheme() {
    setTheme(prev =>
      prev === "spooky-theme" ? "september-theme" : "spooky-theme"
    );
    document.documentElement.setAttribute("data-theme", theme === "spooky-theme" ? "september-theme" : "spooky-theme");
    console.log(theme);
  }

  function toggleNavMenu() {
    setNavMenuOpen(!navmenuOpen);
  }

  function handleNavLinkClick(link: string) {
    setNavMenuOpen(false);
    scrollToSection(link);
  }

  return (
    <div className={`${styles.navigation} ${rubik.className}`}>
      <Scrim onClick={toggleNavMenu} isShowing={navmenuOpen}></Scrim>
      <div className={styles.navigation__left}>
        <a onClick={() => handleNavLinkClick('home')} className={styles.logo}>
          <i><img src="/header-icon.svg" alt="" /></i>
          <div className={styles.logo__text}>
            <span>Amanda</span>
            <span>Simonds</span>
          </div>
        </a>
        <div className={styles.themeChanger} onClick={changeTheme}>
          <i className="fa-solid fa-palette"></i>
        </div>
      </div>

      <div className={styles["navigation__button-mobile"]}>
        <button className={`icon-button icon-button--secondary`} onClick={toggleNavMenu}><i className="material-icons">menu</i></button>
      </div>
      <div className={`${styles.links} ${navmenuOpen ? styles["links--show"] : ""}`}>
        <span className={`cursor-pointer ${styles["close"]}`} onClick={toggleNavMenu}><i className="material-icons">close</i></span>
        {navLinks.map(link => (
          <a key={link.label} onClick={() => handleNavLinkClick(link.link)} target={link.target} rel={link.rel} href={link.extLink}>
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}
