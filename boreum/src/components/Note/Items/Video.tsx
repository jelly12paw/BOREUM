import React from "react";
import styles from "./Video.module.css";

interface VideoProps {
    title: string;
    body: string;
};

export const Video: React.FC<VideoProps> = ({ title, body }) => {
    return <section className={styles.video}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.video__player}>
                    <iframe className={styles.video__iframe}
                        src={body} title={title}
                        width={1000} height={600} allow="accelerometer;
                        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
                </div>
           </section>;
};