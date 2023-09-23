import React, { useState } from 'react';
import styles from './TextareaInput.module.css';
import { BsSend, BsXLg } from 'react-icons/bs';
interface TextareaInputProps {
    onFormSubmit: (title: string, body: string) => void;
    handleClose: () => void;
}

export const TextareaInput: React.FC<TextareaInputProps> = ({ onFormSubmit, handleClose }) => {
    const [title, setTitle] = useState<string>('');
    const [body, setBody] = useState<string>('');
    
    const handleSubmit = () => {
        onFormSubmit(title, body);
    };

    return  <form onSubmit={handleSubmit}>
                <div className={styles.media}>    
                    <div className={styles.form}>
                        <div className={styles.form__container}>
                            <label htmlFor="title">제목</label>
                            <input type="text" id="title" placeholder={'제목을 입력해주세요'} value={title} onChange={(e) => setTitle(e.target.value)} />
                        </div>
                        <div className={styles.form__container}>
                            <label htmlFor="body">노트</label>
                            <textarea id="body" cols={30} rows={6} placeholder={'노트를 입력해주세요'} value={body} onChange={(e) => setBody(e.target.value)} required />
                        </div>
                        <div className={styles.btns}>
                            <button type="submit"><BsSend /></button>
                            <button onClick={handleClose}><BsXLg /></button>
                        </div>
                    </div>
                </div>;
            </form>
};