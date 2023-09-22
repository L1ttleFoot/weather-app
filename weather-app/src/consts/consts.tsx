import { IoCloudyOutline, IoSunnyOutline, IoRainyOutline } from 'react-icons/io5';

export const weatherStyle = {
    clear: {icon: '', color: '#fee9a6'},
    clouds: {icon: '', color: '#dee9ed'},
    rain: {icon: '', color: '#ccf0fe'},
}

export const WeatherIcon = ({weather, ...props}:any) => {

    console.log(weather)

    if (weather === 'Clear') return <IoSunnyOutline {...props}/>
    if (weather === 'Clouds') return <IoCloudyOutline {...props}/>
    if (weather === 'Rain') return <IoRainyOutline {...props}/>
   
    return <div/>
}