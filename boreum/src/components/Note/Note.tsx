import React, { useState } from 'react';
import styles from './Note.module.css';
import yellowmoon from '../../assets/yellowmoon.png';
import whitemoon from '../../assets/whitemoon.png';
import { useDarkmode } from '../../context/DarkmodeContext';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import { PiNotePencilThin } from 'react-icons/pi';
import { Menu } from './Menu';
import { MediaInput } from './Input/MediaInput';

export const Note = () => {
    const { darkmode, toggleDarkmode } = useDarkmode();
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    const [selectedMenu, setSelectedMenu] = useState<string>('');
    const handleMenu = (menu:string) => {
        setSelectedMenu(menu);
    };
    const [title, setTitle] = useState<string>('');
    const [url, setUrl] = useState<string>('');

    const handleFormSubmit = (title: string, url: string) => {
        setTitle(title);
        setUrl(url);
        setSelectedMenu('');
    };
    console.log(title, url);
    const handleClose = () => {
        setSelectedMenu('');
    };
    
    return  <div className={styles.note}>
                <div className={styles.nav}>
                    <Link to="/">
                        <div className={styles.title}>B<span><img src={darkmode ? yellowmoon : whitemoon} alt={'moon'} /></span>RUEM</div>
                    </Link>
                    <button className={styles.mode} onClick={toggleDarkmode}>{darkmode ? <BsSun /> : <BsMoon />}</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.add} onClick={toggleMenu}>
                        <PiNotePencilThin/> ADD
                    </div>
                    {menuOpen && <Menu selected={handleMenu} /> }
                    {selectedMenu && <MediaInput onFormSubmit={handleFormSubmit} handleClose={handleClose}/>}
                    <div className={styles.board}>

                    </div>
                </div>
            </div>;
};