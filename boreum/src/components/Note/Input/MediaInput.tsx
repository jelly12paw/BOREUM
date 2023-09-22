import React, { useState } from 'react';
import styles from './MediaInput.module.css';

interface MediaInputProps {
    onFormSubmit: (title: string, url: string) => void;
}

export const MediaInput: React.FC<MediaInputProps> = ({ onFormSubmit }) => {
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');
    
    const handleSubmit = () => {
        onFormSubmit(title, url);
    };

    return  <div className={styles.media}>    
                <div className={styles.form__container}>
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.form__container}>
                    <label htmlFor="url">URL</label>
                    <input type="text" id="url" value={url} onChange={(e) => setUrl(e.target.value)} />
                </div>
                <div>
                    <button onClick={handleSubmit}>보내기</button>
                </div>
            </div>;
};