import { useState } from "react"
import styles from './form.module.css'
import { Button } from "../../button/button";

interface IAuthForm {
    title: string;
    handleClick: (email: string, password: string) => void
}

const AuthForm = ({title, handleClick}: IAuthForm) => {

    const [email, setEmail] = useState('test@mail.ru')
    const [password, setPassword] = useState('123123')

    return(
        <div className={styles.form}>

            <div className={styles.inputWrapper}>
                <input
                    type="email"
                    className={styles.input}
                    placeholder='email...'
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                />
            </div>
           
            <div className={styles.inputWrapper}>
                <input 
                    type="password"
                    className={styles.input}
                    placeholder='password...'
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                />
            </div>

            <Button onClick={()=>handleClick(email, password)}>{title}</Button>
        </div>
    )
}

export {AuthForm}