import React from 'react'
import { ICard } from '../..'
import { IoClose, IoSunnyOutline } from 'react-icons/io5';

export const Card: React.FC<ICard> = (props) => {

    const {weather, temperature, city, wind, humidity, pressure, removeCard} = props
   
    return (
        <div className='card'>
            <div className='top'>
                <IoClose className='closeIcon' color='grey' onClick={()=>removeCard?.(city)}/>
                <IoSunnyOutline className='weatherIcon'/>
                <div>{weather}</div>
                <div style={{fontSize:30}}>{temperature}&deg;</div>
                <div>{city}</div>
            </div>
            
            <div className='bottom'>
                <div className='wind'>
                    <div style={{fontWeight: 100}}>Wind</div>
                    <div style={{fontWeight: 500}}>{wind}</div>
                </div>
                <div className='humidity'>
                    <div style={{fontWeight: 100}}>Humidity</div>
                    <div style={{fontWeight: 500}}>{humidity}%</div>
                </div>
                <div className='pressure'>
                    <div style={{fontWeight: 100}}>Pressure</div>
                    <div style={{fontWeight: 500}}>{pressure} in</div>
                </div>
            </div>
        </div>
    )
}
