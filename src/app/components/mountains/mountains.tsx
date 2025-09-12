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
      <div className={styles.mountains}>
        <svg width="1539" height="268" viewBox="0 0 1539 268" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M176.16 151.459L0 268H1539L1477.61 238.377L1356.97 165.368L1240.06 180.934L1027.6 121.076L751.788 0L513.534 151.459L416.944 133.32L307.48 191.364L176.16 151.459Z" fill="url(#paint0_linear_81_1798)" />
          <defs>
            <linearGradient id="paint0_linear_81_1798" x1="754.82" y1="-1.22146e-06" x2="755.203" y2="429.404" gradientUnits="userSpaceOnUse">
              <stop stop-color="currentColor" />
              <stop offset="1" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}