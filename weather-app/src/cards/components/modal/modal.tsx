import styles from './modal.module.css'

interface IModal {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode
}

export const Modal: React.FC<IModal> = ({openModal, setOpenModal, children}) => {
    return (
        <div className={openModal ? [styles.modal, styles.active].join(' ') : styles.modal} onClick={()=>setOpenModal(false)}>
            <div className={styles.modal_content} onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}