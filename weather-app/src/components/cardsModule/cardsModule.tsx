import { observer } from 'mobx-react-lite'
import { Card } from './card'
import { AddCard } from './addCard'
import cards from '../../store/cards'
import styles from './cardsModule.module.css'

const CardsModule = observer(({onClickHandler}: {onClickHandler: () => void}) => {

    return (
        <div className={styles.cards}>
            {cards.cards.map((item, index) => 
                <Card key={index} {...item}/>
            )}
            <AddCard onClick={onClickHandler}/>
        </div>
    )
})

export {CardsModule}