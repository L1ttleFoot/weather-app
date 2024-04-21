import {useUser} from '../store/user';

const useAuth = () => {
    const user = useUser((state) => state.user);

    return user.email;
};

export {useAuth};
