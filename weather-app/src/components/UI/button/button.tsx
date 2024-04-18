import styles from './button.module.css';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    onClick: () => void;
}

const Button: React.FC<IButton> = ({children, ...props}) => {
    return (
        <button className={styles.button} {...props}>
            {children}
        </button>
    );
};

export {Button};
