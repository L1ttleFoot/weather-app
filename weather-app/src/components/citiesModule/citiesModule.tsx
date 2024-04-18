import {CityForm} from '../UI/forms/CityForm';
import {City} from './city';
import styles from './citiesModule.module.css';
import cities from '../../store/cities';
import {observer} from 'mobx-react-lite';

const CitiesModule = observer(() => {
    /* const array =
            [
                { "name": "Joe", "age": 17 },
                { "name": "Bob", "age": 17 },
                { "name": "Carl", "age": 35 }
            ]

    const key = 'age';

    const arrayUniqueByKey = [...new Map(array.map(item =>[item[key], item])).values()];

    console.log(arrayUniqueByKey);
 */

    return (
        <div>
            <CityForm placeholder="city..." />

            {cities.cities.length > 0 && (
                <div className={styles.citiesList}>
                    {cities.cities.map((item) => (
                        <City {...item} />
                    ))}
                </div>
            )}
        </div>
    );
});

export {CitiesModule};
