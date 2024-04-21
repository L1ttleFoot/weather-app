import {useNavigate} from 'react-router-dom';
import {Button} from '../UI/button/button';
import {useAuth} from '../../hooks/useAuth';
import {observer} from 'mobx-react-lite';
import {useUser} from '../../store/user';
import styles from './appBar.module.css';

const AppBar = observer(() => {
    const navigate = useNavigate();

    const deleteUser = useUser((state) => state.deleteUser);

    const onclickHandlerLogout = () => {
        deleteUser();
    };

    const appButtons = [
        {
            title: 'Вход',
            link: 'login',
            onClick: () => {
                navigate('login', {replace: false});
            },
        },
        {
            title: 'Регистрация',
            link: 'register',
            onClick: () => {
                navigate('register', {replace: false});
            },
        },
    ];

    return (
        <div className={styles.appBar}>
            <div className={styles.authButtons}>
                {!useAuth() &&
                    appButtons.map((button) => (
                        <Button key={button.link} onClick={button.onClick}>
                            {button.title}
                        </Button>
                    ))}
            </div>

            {useAuth() && <Button onClick={onclickHandlerLogout}>Выход</Button>}
        </div>
    );
});

export {AppBar};
