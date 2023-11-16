import styles from "./Header.module.css";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";
import { Presentation } from "../../types/types";

type HeaderProps = {
  presentation: Presentation;
  name: string;
}

function Header({name, presentation}: HeaderProps) {
    return (
        <div className={styles.header}>
            {name ? (
              <span className={styles.title}>{name}</span>
            ) : (
              <span className={styles.title}>Введите название презентации</span>
            )}
            <MenuBar presentation={presentation}/>
            <ToolBar />
        </div>
    );
}

export default Header;
