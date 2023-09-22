import { makeAutoObservable } from "mobx";

class Query {

    query = 'london'

    constructor(){
        makeAutoObservable(this)
    }

    setQuery(value: string) {
        this.query = value
    }

}

const myQuery = new Query()

export default myQuery