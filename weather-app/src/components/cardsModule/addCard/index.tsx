import React from 'react';
import {IoAddCircleOutline} from 'react-icons/io5';
import styles from './addCard.module.css';

interface IAddCard {
    onClick: () => void;
}

export const AddCard: React.FC<IAddCard> = (props) => {
    const {onClick} = props;

    return (
        <button onClick={onClick} className={styles.addCard} aria-label="addCard">
            <div>
                <IoAddCircleOutline fontSize={120} color="grey" />
            </div>
        </button>
    );
};
