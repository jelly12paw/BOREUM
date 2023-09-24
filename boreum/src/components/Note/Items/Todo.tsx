import React from "react";
import styles from "./Todo.module.css";

interface TodoProps {
    title: string;
    body: string;
};

export const Todo: React.FC<TodoProps> = ({ title, body }) => {
    return <section className={styles.todo}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.todo__container}>
                    <input type="checkbox" />
                    <p>{body}</p>
                </div>
           </section>;
};