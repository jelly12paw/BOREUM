import React, { useState, useEffect } from 'react';
import styles from './Note.module.css';
import yellowmoon from '../../assets/yellowmoon.png';
import whitemoon from '../../assets/whitemoon.png';
import { useDarkmode } from '../../context/DarkmodeContext';
import { Link } from 'react-router-dom';
import { BsSun, BsMoon } from 'react-icons/bs';
import { PiNotePencilThin } from 'react-icons/pi';
import { Menu } from './Menu';
import { MediaInput } from './Input/MediaInput';
import { TextareaInput } from './Input/TextareaInput';
import { TextInput } from './Input/TextInput';
import { RenderItems } from './Items/RenderItems';

interface Item {
    type: string;
    title: string;
    body: string;
}

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

    const [items, setItems] = useState<Item[]>(() => {
        const storedItems = localStorage.getItem('items');
        return storedItems ? JSON.parse(storedItems) : [];
    });
    
    // useEffect(() => {
    //     const storedItems = localStorage.getItem('items');
    //     if (storedItems) {
    //         setItems(JSON.parse(storedItems));
    //     }
    // }, []);
    
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    
    const handleFormSubmit = (title: string, body: string) => {
        const newItem = {type: selectedMenu, title: title, body: body};
        setItems([...items, newItem]);
        setSelectedMenu('');
    };

    const handleClose = () => {
        setSelectedMenu('');
    };

    const handleDelete = (idx: number) => {
        const updatedItems = items.filter((_, index) => index !== idx);
        setItems(updatedItems);
    };

    return  <div className={styles.note}>
                <div className={styles.nav}>
                    <Link to="/">
                        <div className={styles.title}>B<span><img src={darkmode ? yellowmoon : whitemoon} alt={'moon'} /></span>RUEM</div>
                    </Link>
                    <button className={styles.mode} onClick={toggleDarkmode}>{darkmode ? <BsSun /> : <BsMoon />}</button>
                </div>
                <div className={styles.container}>
                    <div className={`${styles.add} ${menuOpen ? styles.opened : ''}`} onClick={toggleMenu}>
                        <PiNotePencilThin/> ADD
                    </div>
                    {menuOpen && <Menu selected={handleMenu} /> }
                    {selectedMenu === 'Video' && <MediaInput onFormSubmit={handleFormSubmit} handleClose={handleClose} />}
                    {selectedMenu === 'Image' && <MediaInput onFormSubmit={handleFormSubmit} handleClose={handleClose} />}
                    {selectedMenu === 'Note' && <TextareaInput onFormSubmit={handleFormSubmit} handleClose={handleClose} />}
                    {selectedMenu === 'Todo' && <TextInput onFormSubmit={handleFormSubmit} handleClose={handleClose} />}
                    <div className={styles.board}>
                        <RenderItems items={items} handleDelete={handleDelete}/>
                    </div>
                </div>
            </div>;
};