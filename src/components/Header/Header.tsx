import "./Header.css";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";

type HeaderProps = {
    name: string;
}

function Header({name}: HeaderProps) {
    return (
        <div className="header">
            {name ? (
              <span className="title">{name}</span>
            ) : (
              <span className="title">Введите название презентации</span>
            )}
            <MenuBar />
            <ToolBar />
        </div>
    );
}

export default Header;
