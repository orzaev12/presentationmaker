import { Presentation } from "../../types/types";
import Button from "../Button/Button"

type MenuBarProps = {
    presentation: Presentation,
}

function MenuBar({presentation}: MenuBarProps)
{
    function getURL(): string {
        const presentJson = JSON.stringify(presentation)
        const type = "application/json"
        const file = new Blob([presentJson], { type: type })
        return URL.createObjectURL(file)

    }
    return (
        <div className="menu">
            <Button text="Файл" />
            <Button text="Правка" />
            <a href={getURL()} download={"presentation.json"}>Save Presentation</a>
        </div>
    )
}

export default MenuBar;