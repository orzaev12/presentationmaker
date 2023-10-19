import "./Header.css";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";

function Header() {
    return (
        <div className="header">
            <MenuBar />
            <ToolBar />
        </div>
    );
}

export default Header;
