import "./ToolBar.css";
import Button from "../Button/Button";

function ToolBar()
{
    return (
        <div className="tool-bar">
            <Button text={"undo"} />
            <Button text={"redo"} />
        </div>
    );
}

export default ToolBar;