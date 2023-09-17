import classes from './button.module.css'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button: React.FC<IButton> = ({children, ...props}) => {

    return(
        <button className={classes.button}>
            {children}
        </button>
    )
}

export default Button