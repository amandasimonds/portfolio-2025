import React from "react";
import styles from "./scrim.module.scss";

type ScrimProps = {
    onClick: () => void;
    isShowing: boolean;
};

const Scrim: React.FC<ScrimProps> = ({ onClick, isShowing }) => (
    <div className={`${styles.scrim} ${isShowing && styles.visible}`} onClick={onClick}>
    </div>
)

export default Scrim;