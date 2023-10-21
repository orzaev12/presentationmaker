import "./Button.css";

type ButtonProps = {
    text?: string;
}

function Button({text}: ButtonProps)
{
    return (
        <button
        type="button"
        className={"button"}>
            <span className="button__text">{text}</span>
        </button>
    );
}

export default Button;