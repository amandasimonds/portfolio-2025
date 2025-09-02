import { parallaxScroll } from "@/app/utils/utils";
import { useEffect, useRef } from "react";
import styles from "./branch.module.scss";

type BranchProps = {
  style?: React.CSSProperties;
  imageStyles?: React.CSSProperties;
};

export default function Branch({ style, imageStyles }: BranchProps) {

  const branchGraphic = useRef<HTMLImageElement>(null) as React.RefObject<HTMLImageElement>;

  useEffect(() => {
    const handleScroll = () => {
      parallaxScroll(branchGraphic, 0.4);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.branchContainer} ref={branchGraphic} style={style}>
      <img
        src="/branch.svg"
        alt="branch graphic by designer amanda simonds"
        className={styles.branch}
        style={imageStyles}
      />
    </div>
  );
}