import React, { useEffect, useState } from 'react'
import { Card } from './components/card'
import { AddCard } from './components/addCard'
import { fetchData,fetchData1 } from '../functions/requests'

export interface ICard {
    weather: string,
    temperature: number,
    city: string,
    wind: string
    humidity: number
    pressure: number,
    removeCard?: (city: string) => void
}

export const Cards = () => {

    useEffect(()=>{
        //fetchData()
        fetchData1()
    },[])

    const a = {
        weather: 'Sunny',
        temperature: 8,
        city: 'London',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    }

    const b = {
        weather: 'Sunny',
        temperature: 8,
        city: 'Irkutsk',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    }

    const c = {
        weather: 'Sunny',
        temperature: 8,
        city: 'Moscow',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    }

    const [cardsList, setCardsList] = useState<ICard[]>([a,b,c])

    const onClickHandler = (): void => {
        console.log('click')
        setCardsList(prev => [...prev, c])
    }

    const removeCard = (city: string): void => {
        setCardsList(prev => prev.filter(item => item.city !== city))
    }

    return (
        <div className='cards'>
            {cardsList.map((item, index) => 
                <Card key={index} {...item} removeCard={removeCard}/>
            )}
            <AddCard onClick={onClickHandler}/>
        </div>
    )
}
