import { IoCloudyOutline, IoSunnyOutline, IoRainyOutline } from 'react-icons/io5';
import { RiMistFill } from 'react-icons/ri';

export const WeatherIcon = ({weather, ...props}:any) => {

    if (weather === 'Clear') return <IoSunnyOutline {...props}/>
    if (weather === 'Clouds') return <IoCloudyOutline {...props}/>
    if (weather === 'Rain') return <IoRainyOutline {...props}/>
    if (weather === 'Mist' || weather === 'Fog') return <RiMistFill {...props}/>

    return <div/>
}