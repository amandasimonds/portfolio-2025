import React from "react";
import styles from "./card.module.scss";

type CardProps = {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    image?: string; // URL or path to the image
    imageAlt?: string; // Alt text for the image
};

export default function Card({
    children,
    className = "",
    style,
    image,
    imageAlt = "Card image",
}: CardProps) {
    return (
        <div className={`${styles.card} ${className}`} style={style}>
            {image && (
                <div className={styles.card__image}>
                    <img src={image} alt={imageAlt} />
                </div>
            )}
            <div className={styles.card__content}>
                {children}
            </div>
        </div>
    );
}