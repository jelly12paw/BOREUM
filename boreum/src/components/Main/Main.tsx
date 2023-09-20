import React from 'react';
import { useDarkmode } from '../../context/DarkmodeContext';

export const Main = () => {
    const { darkmode, toggleDarkmode } = useDarkmode();
    return  <div>
                <div>
                    <button onClick={toggleDarkmode}>
                        {darkmode ? 'dark' : 'light'}
                    </button>
                </div>
            </div>;
};