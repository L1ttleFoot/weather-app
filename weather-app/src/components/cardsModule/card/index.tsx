import React from 'react';
import cards, {ICard} from '../../../store/cards';
import {IoClose} from 'react-icons/io5';
import {observer} from 'mobx-react-lite';
import styles from './card.module.css';
import {windDeg} from '../../../functions/windDeg';
import {WeatherIcon} from '../../../consts/consts';

export const Card: React.FC<ICard> = observer((props) => {
    const {id, weather, main, name, wind} = props;

    const removeHandler = (id: number): void => {
        cards.removeCard(id);
    };

    const direction = windDeg(wind.deg);

    return (
        <div className={styles.card}>
            <div className={[styles.top, styles[`top-${weather[0].main}`]].join(' ')}>
                <IoClose className={styles.closeIcon} onClick={() => removeHandler(id)} />
                <WeatherIcon className={styles.weatherIcon} weather={weather[0].main} />
                <div>{weather[0].main}</div>
                <div style={{fontSize: 30}}>{main.temp}&deg;</div>
                <div>{name}</div>
            </div>

            <div className={styles.bottom}>
                <div className={styles.wind}>
                    <div style={{fontWeight: 100}}>Wind</div>
                    <div style={{fontWeight: 500}}>
                        {wind.speed} {direction}
                    </div>
                </div>
                <div className={styles.humidity}>
                    <div style={{fontWeight: 100}}>Humidity</div>
                    <div style={{fontWeight: 500}}>{main.humidity}%</div>
                </div>
                <div className={styles.pressure}>
                    <div style={{fontWeight: 100}}>Pressure</div>
                    <div style={{fontWeight: 500}}>{main.pressure} hPa</div>
                </div>
            </div>
        </div>
    );
});
