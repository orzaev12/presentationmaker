import styles from "./Header.module.css";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";
import { Presentation } from "../../types/types";

type HeaderProps = {
  presentation: Presentation;
  setPresentation: (value: Presentation) => void
}

function Header({presentation, setPresentation}: HeaderProps) {
    return (
        <div className={styles.header}>
            {presentation.name ? (
              <span className={styles.title}>{presentation.name}</span>
            ) : (
              <span className={styles.title}>Введите название презентации</span>
            )}
            <MenuBar presentation={presentation} setPresentation={setPresentation}/>
            <ToolBar />
        </div>
    );
}

export default Header;
