import { makeAutoObservable } from "mobx";

export interface ICity {
    name: string,
    country: string,
    lat: number,
    lon: number
}

class Cities {

    cities: ICity[] = []
    
    constructor(){
        makeAutoObservable(this)
    }

    clearCitys(){
        this.cities = []
    }

    fetchCities(value: string) {

        const apiKey = process.env.REACT_APP_WEATHER_API_KEY

        fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                this.cities=([...data])
            })
    }

}

const myCities = new Cities()

export default myCities