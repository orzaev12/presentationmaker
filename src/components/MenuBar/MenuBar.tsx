import "./MenuBar.css"
import Button from "../Button/Button"

function MenuBar()
{
    return (
        <div className="menu">
            <Button text={"Файл"} />
            <Button text={"Правка"} />
        </div>
    )
}

export default MenuBar;