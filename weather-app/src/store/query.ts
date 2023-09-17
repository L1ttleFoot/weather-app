import { makeAutoObservable } from "mobx";

class Query {

    query = ''

    constructor(){
        makeAutoObservable(this)
    }

    setQuery(value: string) {
        this.query = value
    }

}

export default new Query()