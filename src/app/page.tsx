'use client'

import Navigation from "./layout/navigation/navigation";
import Experience from "./layout/sections/experience/experience";
import Contact from "./layout/sections/contact/contact";
import Header from "./layout/sections/header/header";
import styles from "./page.module.scss";

export default function Home() {

  return (
    <div className={styles.page}>
      <Navigation></Navigation>
      <main className={styles.main}>
        <Header></Header>
        <Experience></Experience>
        <Contact></Contact>
      </main>
      <footer className={styles.footer}>
        <span className="subtitle">Amanda Simonds Brannock</span>
        <span>
          Copyright &copy; 2025 Amanda Simonds Brannock - All Rights Reserved.
        </span>
        <span>Website & graphics by <a href="http://amandaxandra.netlify.app">Amanda Simonds Brannock</a></span>
      </footer>
    </div>
  );
}
