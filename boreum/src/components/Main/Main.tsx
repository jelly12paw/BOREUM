import React from 'react';
import styles from './Main.module.css';
import yellowmoon from '../../assets/yellowmoon.png';
import whitemoon from '../../assets/whitemoon.png';
import { useDarkmode } from '../../context/DarkmodeContext';
import { PiStampLight, PiNotePencilThin } from 'react-icons/pi';
import { Link } from 'react-router-dom';

export const Main = () => {
    const { darkmode, toggleDarkmode } = useDarkmode();
    return  <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.title}>B<span><img src={darkmode ? yellowmoon : whitemoon} alt={'moon'} /></span>RUEM</div>
                    <div className={styles.btns}>
                        <Link to="/stamp"><p><PiStampLight/> 도장 찍기</p></Link>
                        <p><PiNotePencilThin/> 하루 기록</p>
                    </div>
                </div>
                <button onClick={toggleDarkmode}>
                    Mode
                    <img src={darkmode ? whitemoon : yellowmoon} alt={'moon'} />
                </button>
            </div>;
};