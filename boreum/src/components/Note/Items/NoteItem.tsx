import React from "react";
import styles from "./NoteItem.module.css";

interface NoteItemProps {
    title: string;
    body: string;
};

export const NoteItem: React.FC<NoteItemProps> = ({ title, body }) => {
    return <section className={styles.note}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.note__container}>
                    <textarea value={body} />
                </div>
           </section>;
};