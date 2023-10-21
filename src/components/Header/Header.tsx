import "./Header.css";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";

function Header() {
    return (
        <div className="header">
            <span className="title">Здесь должно быть название презентации!</span>
            <MenuBar />
            <ToolBar />
        </div>
    );
}

export default Header;
