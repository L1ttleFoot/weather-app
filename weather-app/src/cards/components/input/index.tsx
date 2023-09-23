import { observer } from 'mobx-react-lite'
import React from 'react'
import query from '../../../store/query'
import styles from './input.module.css'
import cities from '../../../store/cities'
import { IoSearchOutline } from 'react-icons/io5'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: any) => void
}

const onKeyUpHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.keyCode===13){
        cities.fetchCities(query.query)
    }
}

export const Input: React.FC <IInput> = observer((props) => {

    return (
        <div className={styles.myInput}>
            <input className={styles.input} list='citys' {...props} value={query.query} onKeyUp={(e)=>onKeyUpHandler(e)} onChange={(e) => query.setQuery(e.target.value)}/>
            <IoSearchOutline className={styles.seatchButton} onClick={()=>cities.fetchCities(query.query)}/>
        </div>
    )
})

