import { CityForm } from '../UI/forms/CityForm'
import { City } from './city'
import styles from './citiesModule.module.css'
import cities from '../../store/cities'
import { observer } from 'mobx-react-lite'

const CitiesModule = observer(() => {

    return (
        <div>  
    
            <CityForm placeholder='city...'/> 
            
            {cities.cities.length>0 && <div className={styles.citiesList}>
                {cities.cities.map(item => 
                    <City {...item}/>
                )}
            </div>}

        </div>
    )
})

export {CitiesModule}
