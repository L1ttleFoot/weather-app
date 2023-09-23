import React from 'react'
import { Card } from './components/card'
import { AddCard } from './components/addCard'
import { Input } from './components/input'
import { observer } from 'mobx-react-lite'
import cards from '../store/cards'
import cities from '../store/cities'

export const Cards: React.FC = observer(() => {

    const onClickHandler = (): void => {
        console.log('add')
    }

    return (
        <>
            {cities.cities.length>0 && <div className='citiesList'>
                {cities.cities.map(item => 
                    <div key={item.lat} className='city' onClick={()=>cards.fetchCard(item)}>
                        <div className='cityName'>{item.name}, {item.country} 
                            <img alt='flag' src={`http://openweathermap.org/images/flags/${item.country.toLocaleLowerCase()}.png`}/>
                        </div>
                    </div>
                )}
            </div>}

            <div className='control'>
                <Input placeholder='city...'/> 
            </div>
            
            <div className='cards'>
                {cards.cards.map((item, index) => 
                    <Card key={index} {...item}/>
                )}
                <AddCard onClick={onClickHandler}/>
            </div>
        </>
    )
})
