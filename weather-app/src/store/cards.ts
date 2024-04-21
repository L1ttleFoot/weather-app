import {ICity} from './cities';
import {create} from 'zustand';
import {persist, createJSONStorage} from 'zustand/middleware';

export interface ICard {
    id: number;
    weather: {main: string}[];
    main: {
        temp: number;
        humidity: number;
        pressure: number;
    };
    name: string;
    wind: {
        speed: number;
        deg: number;
    };
}

interface CardsState {
    cards: ICard[];
    removeCard: (id: number) => void;
    fetchCard: (city: ICity) => void;
}

export const useCard = create(
    persist<CardsState>(
        (set) => ({
            cards: [],
            removeCard: (id) =>
                set((state) => ({cards: state.cards.filter((item) => item.id !== id)})),
            fetchCard: async (city) => {
                const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`,
                );

                const data = await response.json();

                set((state) => ({cards: [...state.cards, data]}));
            },
        }),
        {
            name: 'card-storage',
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
);
