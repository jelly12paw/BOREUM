import React from 'react';
import styles from './Note.module.css';
import yellowmoon from '../../assets/yellowmoon.png';
import whitemoon from '../../assets/whitemoon.png';
import { useDarkmode } from '../../context/DarkmodeContext';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import { PiNotePencilThin } from 'react-icons/pi';

export const Note = () => {
    const { darkmode, toggleDarkmode } = useDarkmode();
    return  <div className={styles.note}>
                <div className={styles.nav}>
                    <Link to="/">
                        <div className={styles.title}>B<span><img src={darkmode ? yellowmoon : whitemoon} alt={'moon'} /></span>RUEM</div>
                    </Link>
                    <button className={styles.mode} onClick={toggleDarkmode}>{darkmode ? <BsSun /> : <BsMoon />}</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.add}>
                        <PiNotePencilThin/> ADD
                    </div>
                    <div className={styles.board}></div>
                </div>
            </div>;
};