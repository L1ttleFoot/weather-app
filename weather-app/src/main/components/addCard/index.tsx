import React from 'react'
import { IoAddCircleOutline } from 'react-icons/io5';

interface IAddCard {
    onClick: () => void,
}

export const AddCard: React.FC<IAddCard> = (props) => {

    const {onClick} = props

    return (
        <div onClick={onClick} className='addCard'>
            <div>
                <IoAddCircleOutline fontSize={120} color='grey'/>
            </div>
        </div>
    )
}
