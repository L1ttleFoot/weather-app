import user from "../store/user"

const isAuth = () => {
    return user.user.email
}

export {isAuth}