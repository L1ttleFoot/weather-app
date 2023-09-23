import { makeAutoObservable } from "mobx";

class Query {

    query = ''

    constructor(){
        makeAutoObservable(this)
    }

    setQuery(value: string) {

        const capitalizeValue = value.charAt(0).toUpperCase() + value.slice(1);

        this.query = capitalizeValue
    }

}

const myQuery = new Query()

export default myQuery