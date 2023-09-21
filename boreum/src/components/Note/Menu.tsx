import React from 'react';
import styles from './Menu.module.css';

export const Menu = () => {
    return  <div className={styles.menu}>
                <div className={styles.items}>
                    <div>비디오</div>
                    <div>이미지</div>
                    <div>노트</div>
                    <div>체크박스</div>
                </div>
            </div>;
};