import React, { useState, useEffect } from 'react';
import styles from './Stamp.module.css';
import { useDarkmode } from '../../context/DarkmodeContext';
import yellowmoon from '../../assets/yellowmoon.png';
import whitemoon from '../../assets/whitemoon.png';

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

    return  <div className={styles.stamp_board}>
                {showInput ? (
                  <div>
                    <input
                      type="text"
                      placeholder="Enter Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <button onClick={handleConfirmClick}>Confirm</button>
                  </div>
                ) : title ? '' : (
                  <button onClick={handleAddClick}>Add</button>
                )}
                {title && (
                  <div>
                    <h2>{title}</h2>
                    <div className={styles.stamp_container}>
                      {stamps.map((isStamped, index) => (
                        <div
                          key={index}
                          className={isStamped ? styles.stamped : styles.stamp}
                          onClick={() => handleStampClick(index)}
                        ></div>
                      ))}
                    </div>
                    <button onClick={handleClearLocalStorage}>Clear Local Storage</button>
                  </div>
                )}
                <button onClick={toggleDarkmode}>
                    Mode
                    <img src={darkmode ? whitemoon : yellowmoon} alt={'moon'} />
                </button>
            </div>;
};