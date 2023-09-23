import React, { useState } from 'react';
import styles from './MediaInput.module.css';
import { BsSend, BsXLg } from 'react-icons/bs';
interface MediaInputProps {
    onFormSubmit: (title: string, url: string) => void;
    handleClose: () => void;
}

export const MediaInput: React.FC<MediaInputProps> = ({ onFormSubmit, handleClose }) => {
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    
    const handleSubmit = () => {
        onFormSubmit(title, url);
    };

    return  <div className={styles.media}>    
                <div className={styles.form}>
                    <div className={styles.form__container}>
                        <label htmlFor="title">제목</label>
                        <input type="text" id="title" placeholder={'제목을 입력해주세요'} value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className={styles.form__container}>
                        <label htmlFor="url">URL</label>
                        <input type="text" id="url" placeholder={'파일 주소를 입력해주세요'} value={url} onChange={(e) => setUrl(e.target.value)} />
                    </div>
                    <div className={styles.btns}>
                        <button onClick={handleSubmit}><BsSend /></button>
                        <button onClick={handleClose}><BsXLg /></button>
                    </div>
                </div>
            </div>;
};