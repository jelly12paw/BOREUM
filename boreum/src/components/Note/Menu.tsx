import React, { useState } from 'react';
import styles from './Menu.module.css';
import { BsCameraVideo, BsImage } from 'react-icons/bs';
import { TfiNotepad, TfiCheckBox } from 'react-icons/tfi';
import { MediaInput } from './Input/MediaInput';

export const Menu = () => {
    const [selectMenu, setSelectMenu] = useState<string | null>(null);
    const handleMenu = (menu: string) => {
        setSelectMenu(menu);

    };
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    const handleFormSubmit = (title: string, url: string) => {
        setTitle(title);
        setUrl(url);
    };
    console.log(`Title: ${title}, URL: ${url}`);

    return  <div className={styles.menu}>
                <div className={styles.items}>
                    <div onClick={() => handleMenu('video')}><BsCameraVideo />Video</div>
                    <div onClick={() => handleMenu('image')}><BsImage />Image</div>
                    <div onClick={() => handleMenu('note')}><TfiNotepad />Note</div>
                    <div onClick={() => handleMenu('todo')}><TfiCheckBox />Todo</div>
                </div>
                {selectMenu === 'video' && <MediaInput onFormSubmit={handleFormSubmit} />}
                {selectMenu === 'image' && <MediaInput onFormSubmit={handleFormSubmit} />}
            </div>;
};