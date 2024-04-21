import {create} from 'zustand';

interface QueryState {
    query: string;
    setQuery: (value: string) => void;
}

export const useQuery = create<QueryState>((set) => ({
    query: '',
    setQuery: (value: string) => {
        const capitalizeValue = value.charAt(0).toUpperCase() + value.slice(1);

        set(() => ({query: capitalizeValue}));
    },
}));
