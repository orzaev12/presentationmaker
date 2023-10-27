import styles from "./Header.module.css";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";

type HeaderProps = {
    name: string;
}

function Header({name}: HeaderProps) {
    return (
        <div className={styles.header}>
            {name ? (
              <span className={styles.title}>{name}</span>
            ) : (
              <span className={styles.title}>Введите название презентации</span>
            )}
            <MenuBar />
            <ToolBar />
        </div>
    );
}

export default Header;
