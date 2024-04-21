import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import {useUser} from '../../store/user';
import {AuthForm} from '../UI/forms/AuthForm/AuthForm';
import {useNavigate} from 'react-router-dom';

const RegisterModule = () => {
    const navigate = useNavigate();

    const setUser = useUser((state) => state.setUser);

    const handleRegister = (email: string, password: string) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then(console.log)
            .then(() => setUser({email: email, password: password}))
            .then(() => navigate('/', {replace: false}))
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    return <AuthForm title="Register" handleClick={handleRegister} />;
};

export {RegisterModule};
