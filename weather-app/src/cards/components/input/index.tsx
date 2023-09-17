import { observer } from 'mobx-react-lite'
import React from 'react'
import query from '../../../store/query'
import classes from './input.module.css'

interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
    onChange?: (e: any) => void
}

export const Input: React.FC <IInput> = observer((props) => {

    console.log(query.query)

    return (
        <div className={classes.input}>
            <input {...props} value={query.query} onChange={(e) => query.setQuery(e.target.value)}/>
        </div>
    )
})

