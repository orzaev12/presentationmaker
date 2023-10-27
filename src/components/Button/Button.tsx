import styles from "./Button.module.css"

type ButtonProps = {
    text?: string;
}

function Button({text}: ButtonProps)
{
    return (
        <button
        type="button"
        className={styles.button}>
            <span className={styles.text}>{text}</span>
        </button>
    );
}

export default Button;