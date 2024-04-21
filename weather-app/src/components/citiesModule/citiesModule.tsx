import {CityForm} from '../UI/forms/CityForm';
import {City} from './city';
import styles from './citiesModule.module.css';
import {useCity} from '../../store/cities';

const CitiesModule = () => {
    const cities = useCity((state) => state.cities);

    return (
        <div>
            <CityForm placeholder="city..." />

            {cities.length > 0 && (
                <div className={styles.citiesList}>
                    {cities.map((item) => (
                        <City {...item} />
                    ))}
                </div>
            )}
        </div>
    );
};

export {CitiesModule};
