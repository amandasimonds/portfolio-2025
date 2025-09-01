import { parallaxScroll } from "@/app/utils/utils";
import { useEffect, useRef } from "react";
import styles from "./mountains.module.scss";

export default function Mountain({ style }: { style?: React.CSSProperties }) {
  const mountainGraphic = useRef<HTMLImageElement>(null) as React.RefObject<HTMLImageElement>;

  useEffect(() => {
    const handleScroll = () => {
      parallaxScroll(mountainGraphic, 0.1); // Adjust scrollSpeed as needed
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={styles.mountainContainer} ref={mountainGraphic}>
      <img
        src="/mountains.svg"
        alt="mountain graphic by designer amanda simonds"
        className={styles.mountains}
      />
    </div>
  );
}