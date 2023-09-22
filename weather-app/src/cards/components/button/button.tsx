import classes from './button.module.css'

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void
}

const Button: React.FC<IButton> = ({children, ...props}) => {

    return(
        <button className={classes.button} {...props}>
            {children}
        </button>
    )
}

export default Button