import cards from "../../../store/cards"
import { ICity } from "../../../store/cities"

export const City: React.FC<ICity> = (props) => {

    const {name, country, lat} = props

    return(
        <div key={lat} className='city' onClick={()=>cards.fetchCard(props)}>
            <div className='cityName'>
                {name}, 
                {country} 
                <img alt='flag' src={`http://openweathermap.org/images/flags/${country.toLocaleLowerCase()}.png`}/>
            </div>
        </div>
    )
}