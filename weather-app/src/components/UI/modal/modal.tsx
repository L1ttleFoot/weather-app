import cities from '../../../store/cities';
import query from '../../../store/query';
import styles from './modal.module.css'

interface IModal {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode
}

export const Modal: React.FC<IModal> = ({openModal, setOpenModal, children}) => {

    const modalHandler = () => {
        setOpenModal(false)
        query.setQuery('')
        cities.clearCitys()
    }

    return (
        <div className={openModal ? [styles.modal, styles.active].join(' ') : styles.modal} onClick={modalHandler}>
            <div className={styles.modal_content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}