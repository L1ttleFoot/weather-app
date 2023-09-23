import React, { useState } from 'react'
import { Card } from './components/card'
import { AddCard } from './components/addCard'
import { Input } from './components/input'
import { observer } from 'mobx-react-lite'
import cards from '../store/cards'
import cities from '../store/cities'
import { Modal } from './components/modal/modal'

export const Main: React.FC = observer(() => {

    const onClickHandler = (): void => {
        setOpenModal(true)
    }

    const [openModal, setOpenModal] = useState(false)

    return (
        <>
            <Modal openModal={openModal} setOpenModal={setOpenModal}>

                <Input placeholder='city...'/> 
               
                {cities.cities.length>0 && <div className='citiesList'>
                    {cities.cities.map(item => 
                        <div key={item.lat} className='city' onClick={()=>cards.fetchCard(item)}>
                            <div className='cityName'>{item.name}, {item.country} 
                                <img alt='flag' src={`http://openweathermap.org/images/flags/${item.country.toLocaleLowerCase()}.png`}/>
                            </div>
                        </div>
                    )}
                </div>}
            </Modal>
            
            <div className='cards'>
                {cards.cards.map((item, index) => 
                    <Card key={index} {...item}/>
                )}
                <AddCard onClick={onClickHandler}/>
            </div>
        </>
    )
})
