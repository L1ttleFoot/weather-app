import { ReactNode } from 'react'
import styles from './pageContainer.module.css'

interface IPageContainer{
    children: ReactNode
}

const PageContainer = ({children}: IPageContainer) => {
    return(
        <div className={styles.pageContainer}>
            {children}
        </div>
    )
}

export {PageContainer}