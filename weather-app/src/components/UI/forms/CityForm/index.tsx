import React from 'react';
import {useQuery} from '../../../../store/query';
import styles from './input.module.css';
import {useCity} from '../../../../store/cities';
import {IoSearchOutline} from 'react-icons/io5';

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: any) => void;
}

/* const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
        cities.fetchCities(query.query);
    }
}; */

const CityForm: React.FC<IInput> = (props) => {
    const fetchCities = useCity((state) => state.fetchCities);
    const query = useQuery((state) => state.query);
    const setQuery = useQuery((state) => state.setQuery);

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchCities(query);
    };

    return (
        <form className={styles.inputWrapper} onSubmit={onSubmitHandler}>
            <input
                {...props}
                className={styles.input}
                value={query}
                //onKeyUp={(e)=>onKeyUpHandler(e)}
                onChange={(e) => setQuery(e.target.value)}
            />
            <IoSearchOutline className={styles.seatchButton} onClick={() => fetchCities(query)} />
        </form>
    );
};

export {CityForm};
