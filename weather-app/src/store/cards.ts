import { makeAutoObservable } from "mobx";
import { ICity } from "./cities";

export interface ICard {
    id: number,
    weather: {main: string}[],
    main: {
        temp: number,
        humidity: number
        pressure: number,
    },
    name: string,
    wind: {
        speed: number,
        deg: number
    }
}

class Cards {

    cards: ICard[] = []
    statusCards = 200

    constructor(){
        makeAutoObservable(this)
    }

    addCard(value: ICard) {
        this.cards.push(value)
    }

    fetchCard(city: ICity) {

        const apiKey = process.env.REACT_APP_WEATHER_API_KEY

        this.statusCards = 202
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${city.lat}&lon=${city.lon}&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.cards.push(data)
                this.statusCards = 200
            })
    }

    removeCard(value: number) {
        this.cards = this.cards.filter(item => item.id !== value)
    }

}

const myCards = new Cards()

export default myCards