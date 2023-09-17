import { makeAutoObservable } from "mobx";

class Cards {

    cards =  [{
        weather: 'Sunny',
        temperature: 8,
        city: 'London',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    },
     {
        weather: 'Sunny',
        temperature: 8,
        city: 'Irkutsk',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    },
     {
        weather: 'Sunny',
        temperature: 8,
        city: 'Moscow',
        wind: 'SW 14 mph',
        humidity: 80,
        pressure: 30.19
    }]

    constructor(){
        makeAutoObservable(this)
    }

    addCard(value: any) {
        console.log(value)
        console.log(this.cards)
        this.cards.push(value)
    }

    removeCard(value: string) {
        console.log(value)
        console.log(this.cards.filter(item => item.city !== value))
        this.cards = this.cards.filter(item => item.city !== value)
    }

}

export default new Cards()