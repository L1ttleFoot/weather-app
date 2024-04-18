import {useNavigate} from 'react-router-dom';
import {Button} from '../UI/button/button';
import {isAuth} from '../../functions/isAuth';
import {observer} from 'mobx-react-lite';
import user from '../../store/user';
import styles from './appBar.module.css';

const AppBar = observer(() => {
    const navigate = useNavigate();

    const onclickHandlerLogout = () => {
        user.deleteUser();
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
                {!isAuth() &&
                    appButtons.map((button) => (
                        <Button key={button.link} onClick={button.onClick}>
                            {button.title}
                        </Button>
                    ))}
            </div>

            {isAuth() && <Button onClick={onclickHandlerLogout}>Выход</Button>}
        </div>
    );
});

export {AppBar};
