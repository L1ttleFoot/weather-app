import React, { useEffect, useState } from 'react'
import { Card } from './components/card'
import { AddCard } from './components/addCard'
import { fetchData,fetchData1 } from '../functions/requests'
import { Input } from './components/input'
import Button from './components/button/button'
import { observer } from 'mobx-react-lite'
import cards from '../store/cards'

export interface ICard {
    weather: string,
    temperature: number,
    city: string,
    wind: string
    humidity: number
    pressure: number,
    removeCard?: (city: string) => void
}

export const Cards: React.FC = observer(() => {

    useEffect(()=>{
        //fetchData()
        //fetchData1()
    },[])

    const c = {
        weather: 'Sunny',
        temperature: 8,
        city: 'Moscow',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    }

    const onClickHandler = (): void => {
        console.log('click')
        cards.addCard(c)
    }

    const remove = (city: string): void => {
        cards.removeCard(city)
    }

    return (
        <>
            <div className='control'>
                <Input placeholder='city...'/> 
                <Button>SUBBMITE</Button>
            </div>
            
            <div className='cards'>
                {cards.cards.map((item, index) => 
                    <Card key={index} {...item} removeCard={remove}/>
                )}
                <AddCard onClick={onClickHandler}/>
            </div>
        </>
    )
})
