import React from 'react';
import styles from './Menu.module.css';
import { BsCameraVideo, BsImage } from 'react-icons/bs';
import { TfiNotepad, TfiCheckBox } from 'react-icons/tfi';

interface MenuProps {
    selected: (menu: string) => void;
}

export const Menu: React.FC<MenuProps> = ({ selected }) => {
    const handleMenu = (menu: string) => {
        selected(menu);
    };
    
    return  <div className={styles.menu}>
                <div className={styles.items}>
                    <div onClick={() => handleMenu('video')}><BsCameraVideo />Video</div>
                    <div onClick={() => handleMenu('image')}><BsImage />Image</div>
                    <div onClick={() => handleMenu('note')}><TfiNotepad />Note</div>
                    <div onClick={() => handleMenu('todo')}><TfiCheckBox />Todo</div>
                </div>
            </div>;
};