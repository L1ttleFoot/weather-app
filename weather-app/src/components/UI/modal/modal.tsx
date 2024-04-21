import {useCity} from '../../../store/cities';
import {useQuery} from '../../../store/query';
import styles from './modal.module.css';

interface IModal {
    openModal: boolean;
    setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
    children: React.ReactNode;
}

export const Modal: React.FC<IModal> = ({openModal, setOpenModal, children}) => {
    const setQuery = useQuery((state) => state.setQuery);
    const clearCitys = useCity((state) => state.clearCitys);

    const modalHandler = () => {
        setOpenModal(false);
        setQuery('');
        clearCitys();
    };

    return (
        <div
            className={openModal ? [styles.modal, styles.active].join(' ') : styles.modal}
            onClick={modalHandler}
        >
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
