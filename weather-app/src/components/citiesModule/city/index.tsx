import cards from '../../../store/cards';
import {ICity} from '../../../store/cities';
import styles from './city.module.css';

export const City: React.FC<ICity> = (props) => {
    const {name, state, country, lat} = props;

    const fullCity = `${name}, ${state ?? ''} ${country}`;

    return (
        <div key={lat} className={styles.city} onClick={() => cards.fetchCard(props)}>
            <div>
                {fullCity}
                <img
                    className={styles.flagImg}
                    alt="flag"
                    src={`http://openweathermap.org/images/flags/${country.toLocaleLowerCase()}.png`}
                />
            </div>
        </div>
    );
};
