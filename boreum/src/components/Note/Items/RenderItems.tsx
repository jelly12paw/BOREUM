import React from "react";
import styles from "./RenderItems.module.css";
import { Video } from "./Video";
import { BsTrash } from 'react-icons/bs';
import { Image } from "./Image";
import { NoteItem } from "./NoteItem";

interface RenderItemsProps {
    items: {
        type: string;
        title: string;
        body: string;
    }[];
    handleDelete: (idx: number) => void;
}

export const RenderItems: React.FC<RenderItemsProps> = ({ items, handleDelete }) => {
      const renderItem = ( item: {type: string, title: string, body: string}, idx: number ) => {
        switch (item.type) {
            case 'Video':
                return <div key={idx} className={styles.container}>
                            <Video title={item.title} body={item.body} />
                            <button onClick={() => handleDelete(idx)}><BsTrash /></button>
                       </div>
            case 'Image':
                return <div key={idx} className={styles.container}>
                            <Image title={item.title} body={item.body} />
                            <button onClick={() => handleDelete(idx)}><BsTrash /></button>
                       </div>
            case 'Note':
                return <div key={idx} className={styles.container}>
                            <NoteItem title={item.title} body={item.body} />
                            <button onClick={() => handleDelete(idx)}><BsTrash /></button>
                       </div>
            default:
                return null;
        }
    };

    return <div>
                {items.map((item, idx: number) => (renderItem(item, idx)))}
           </div>;
};