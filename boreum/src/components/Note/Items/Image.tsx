import React from "react";
import styles from "./Image.module.css";

interface ImageProps {
    title: string;
    body: string;
};

export const Image: React.FC<ImageProps> = ({ title, body }) => {
    return <section className={styles.image}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.image__container}>
                    <img src={body} width={1000} alt={title} />
                </div>
           </section>;
};