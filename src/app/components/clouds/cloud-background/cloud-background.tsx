import { useEffect, useRef } from "react";
import Cloud from "../cloud/cloud";
import styles from "./cloud-background.module.scss";
import { parallaxScroll } from "@/app/utils/utils";

export default function CloudBackground() {
  const cloudsBg = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    const handleScroll = () => {
      parallaxScroll(cloudsBg); // Adjust scrollSpeed as needed
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.cloudsBg} ref={cloudsBg}>
      <Cloud style={{ left: "10vw", top: "50vh", width: "50px", animationDelay: "0s" }} />
      <Cloud style={{ left: "50vw", top: "10vh", width: "60px", animationDelay: "1s" }} />
      <Cloud style={{ left: "80vw", top: "20vh", width: "40px", animationDelay: "2s" }} />
      <Cloud style={{ left: "20vw", top: "60vh", width: "80px", animationDelay: "3s" }} />
      <Cloud style={{ left: "70vw", top: "40vh", width: "50px", animationDelay: "4s" }} />
    </div>
  );
}