import { useState } from 'react'
import { Modal } from '../components/UI/modal/modal'
import { AppBar } from '../components/appBar/appBar'
import { CitiesModule } from '../components/citiesModule/citiesModule'
import { CardsModule } from '../components/cardsModule/cardsModule'

const MainPage = () => {

    const onClickHandler = () => {
        setOpenModal(true)
    }

    const [openModal, setOpenModal] = useState(false)

    return (
        <>  
            <AppBar/>
        
            <CardsModule onClickHandler={onClickHandler}/>

            <Modal openModal={openModal} setOpenModal={setOpenModal}>
                <CitiesModule/>
            </Modal>
        </>
    )
}

export {MainPage}