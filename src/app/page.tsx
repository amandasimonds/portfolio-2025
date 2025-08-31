'use client'

import Navigation from "./layout/navigation/navigation";
import Experience from "./layout/sections/experience/experience";
import Contact from "./layout/sections/contact/contact";
import Header from "./layout/sections/header/header";
import styles from "./page.module.scss";
import { Open_Sans } from "next/font/google";
import CloudBackground from "./components/clouds/cloud-background/cloud-background";
import Work from "./layout/sections/work/work";
import About from "./layout/sections/about/about";

  const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "800"],
});

export default function Home() {

  return (
    <div className={styles.page}>
      <CloudBackground />
      <Navigation />
      <main className={`${styles.main} ${openSans.className}`}>
        <Header />
        <Experience />
        <Work />
        <About />
        <Contact />
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
