import Cloud from "../cloud/cloud";
import styles from "./cloud-background.module.scss";

export default function CloudBackground() {
  return (
      <div className={styles.cloudsBg}>
        <Cloud style={{ left: "10vw", top: "60vh", width: "50px", animationDelay: "0s" }} />
        <Cloud style={{ left: "50vw", top: "20vh", width: "60px", animationDelay: "1s" }} />
        <Cloud style={{ left: "80vw", top: "30vh", width: "40px", animationDelay: "2s" }} />
        <Cloud style={{ left: "20vw", top: "70vh", width: "80px", animationDelay: "3s" }} />
        <Cloud style={{ left: "70vw", top: "50vh", width: "50px", animationDelay: "4s" }} />
      </div>
  );
}