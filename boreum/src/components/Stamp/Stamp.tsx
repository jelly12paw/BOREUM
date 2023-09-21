import React, { useState, useEffect } from 'react';
import styles from './Stamp.module.css';
import { useDarkmode } from '../../context/DarkmodeContext';
import yellowmoon from '../../assets/yellowmoon.png';
import whitemoon from '../../assets/whitemoon.png';
import { Link } from 'react-router-dom';
import { BsTrash, BsSun, BsMoon, BsSend } from 'react-icons/bs';
import { PiStampLight } from 'react-icons/pi';

export const Stamp = () => {
    const { darkmode, toggleDarkmode } = useDarkmode();
    const [showInput, setShowInput] = useState(false);
    const [title, setTitle] = useState<string>(() => {
        return localStorage.getItem('title') || '';
    });
    const [stamps, setStamps] = useState<boolean[]>(() => {
        const storedStamps = localStorage.getItem('stamps');
        return storedStamps ? JSON.parse(storedStamps) : Array(15).fill(false);
    });

    useEffect(() => {
        localStorage.setItem('title', title);
    }, [title]);

    useEffect(() => {
        localStorage.setItem('stamps', JSON.stringify(stamps));
    }, [stamps]);
    
    const handleAddClick = () => {
        setShowInput(true);
    };

    const handleConfirmClick = () => {
        setShowInput(false);
    };

    const handleStampClick = (index: number) => {
        const updatedStamps = [...stamps];
        updatedStamps[index] = !updatedStamps[index];
        setStamps(updatedStamps);
    };
    
    const handleClearLocalStorage = () => {
        localStorage.removeItem('title');
        localStorage.removeItem('stamps');
        setTitle('');
        setStamps(Array(15).fill(false));
    };

    return  <div className={styles.main}>
                <div className={styles.nav}>
                    <Link to="/">
                        <div className={styles.title}>B<span><img src={darkmode ? yellowmoon : whitemoon} alt={'moon'} /></span>RUEM</div>
                    </Link>
                    <button className={styles.mode} onClick={toggleDarkmode}>{darkmode ? <BsSun /> : <BsMoon />}</button>
                </div>
                <div className={styles.container}>
                    <div className={styles.stamp_board}>
                        {showInput ? (
                            <div className={styles.create}>
                                  <input type="text" placeholder="목표 습관을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} />
                                  <button onClick={handleConfirmClick}><BsSend /></button>
                            </div>
                        ) : title ? '' : (
                          <button className={styles.add} onClick={handleAddClick}><PiStampLight /> ADD</button>
                        )}
                        {title && (
                            <div className={styles.boards}>
                                <div className={styles.board_nav}>
                                    <h2>{title}</h2>
                                </div>
                                <div className={styles.bin} onClick={handleClearLocalStorage}><BsTrash /></div>
                                <div className={styles.stamp_container}>
                                    {stamps.map((isStamped: boolean, index: number) => (
                                        <div key={index} className={isStamped ? styles.stamped : styles.stamp} onClick={() => handleStampClick(index)}>
                                            {isStamped ? <img src={yellowmoon} alt="yellowmoon" /> : <img src={whitemoon} alt="whitemoon"/>}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>;
};