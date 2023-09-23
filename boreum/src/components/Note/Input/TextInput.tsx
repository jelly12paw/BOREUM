import React, { useState } from 'react';
import styles from './TextInput.module.css';
import { BsSend, BsXLg } from 'react-icons/bs';
interface TextareaInputProps {
    onFormSubmit: (title: string, body: string) => void;
    handleClose: () => void;
}

export const TextInput: React.FC<TextareaInputProps> = ({ onFormSubmit, handleClose }) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    
    const handleSubmit = () => {
        onFormSubmit(title, body);
    };

    return  <form onSubmit={handleSubmit}>
                <div className={styles.todo}>    
                    <div className={styles.form}>
                        <div className={styles.form__container}>
                            <label htmlFor="title">제목</label>
                            <input type="text" id="title" placeholder={'제목을 입력해주세요'} value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className={styles.form__container}>
                            <label htmlFor="body">할 일</label>
                            <input type="text" id="body" placeholder={'할 일을 입력해주세요'} value={body} onChange={(e) => setBody(e.target.value)} required />
                        </div>
                        <div className={styles.btns}>
                            <button type="submit"><BsSend /></button>
                            <button onClick={handleClose}><BsXLg /></button>
                        </div>
                    </div>
                </div>;
            </form>
};