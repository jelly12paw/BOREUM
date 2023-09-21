import React from 'react';
import styles from './Menu.module.css';
import { BsCameraVideo, BsImage } from 'react-icons/bs';
import { TfiNotepad, TfiCheckBox } from 'react-icons/tfi';

export const Menu = () => {
    return  <div className={styles.menu}>
                <div className={styles.items}>
                    <div><BsCameraVideo />Video</div>
                    <div><BsImage />Image</div>
                    <div><TfiNotepad />Note</div>
                    <div><TfiCheckBox />Checkbox</div>
                </div>
            </div>;
};