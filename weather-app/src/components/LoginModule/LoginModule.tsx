import {signInWithEmailAndPassword, getAuth} from 'firebase/auth';
import {useUser} from '../../store/user';
import {AuthForm} from '../UI/forms/AuthForm/AuthForm';
import {observer} from 'mobx-react-lite';
import {useNavigate} from 'react-router-dom';

const LoginModule = observer(() => {
    const navigate = useNavigate();

    const setUser = useUser((state) => state.setUser);

    const handleLogin = (email: string, password: string) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .then(() => setUser({email: email, password: password}))
            .then(() => navigate('/', {replace: false}))
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    return <AuthForm title="Login" handleClick={handleLogin} />;
});

export {LoginModule};
