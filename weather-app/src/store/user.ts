import {create} from 'zustand';

interface IUser {
    email: string | null;
    password: string | null;
}

interface UserState {
    user: IUser;
    setUser: (user: IUser) => void;
    deleteUser: () => void;
}

export const useUser = create<UserState>((set) => ({
    user: {
        email: null,
        password: null,
    },

    setUser: ({email, password}) => set(() => ({user: {email, password}})),
    deleteUser: () => set(() => ({user: {email: null, password: null}})),
}));
