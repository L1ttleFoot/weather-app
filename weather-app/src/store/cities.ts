import {create} from 'zustand';

export interface ICity {
    name: string;
    country: string;
    state: string;
    lat: number;
    lon: number;
}

interface CitiesState {
    cities: ICity[];
    clearCitys: () => void;
    fetchCities: (value: string) => void;
}

export const useCity = create<CitiesState>((set) => ({
    cities: [],
    clearCitys: () => set(() => ({cities: []})),
    fetchCities: async (value) => {
        const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

        const response = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`,
        );

        const data = await response.json();

        set(() => ({cities: [...data]}));
    },
}));
