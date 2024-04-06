import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import user from "../../store/user";
import { AuthForm } from "../UI/forms/AuthForm/AuthForm"
import { useNavigate } from "react-router-dom";

const RegisterModule = () => {

    const navigate = useNavigate();

    const handleRegister = (email: string, password: string) => {

        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(console.log)
        .then(() => user.setUser({email: email, password: password}))
        .then(() => navigate('/', { replace: false }))
        .catch((error) => {
            console.log(error.code)
            console.log(error.message)
        });
    }

    return(
        <AuthForm title="Register" handleClick={handleRegister}/>
    )
}

export {RegisterModule}