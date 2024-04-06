import { makeAutoObservable } from "mobx";

interface IUser {
    email: string | null,
    password: string | null
}

class User {

    user: IUser = {
        email: null,
        password: null,
    }

    constructor(){
        makeAutoObservable(this)
    }

    setUser(user: IUser) {
        
        const {email, password} = user

        this.user.email = email
        this.user.password = password
    }

    deleteUser(){
        this.user = {
            email: null,
            password: null,
        }
    
    }

}

const myUser = new User()

export default myUser