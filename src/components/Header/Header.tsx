import styles from "./Header.module.css"
import { useContext, useEffect, useRef } from "react";
import { PresentationContext } from "../../context/presentation";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";
import classNames from "classnames";

function Header() {
    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
    const ref = useRef<HTMLInputElement>(null)
    const changeTitle = (newTitle: string) => {
        newPresentation.name = newTitle
        setPresentation(newPresentation)
    }

    useEffect(() => {
        const onKeyDown = () => {
            ref.current!.style.width = `${(ref.current!.value.length + 5) * 8}px`;
            }
        const elem = ref.current!
        elem.addEventListener('keydown', onKeyDown)
        return () => elem.removeEventListener('keydown', onKeyDown)
    }, [])

    return (
        <div className={styles.header}>
            <div className={styles.infoRow}>
                <img src="./coconut.svg" className={styles.icon} />
                <div className={styles.infoColumn}>
                    <input
                        maxLength={50}
                        ref={ref}
                        className={classNames(styles.title, styles.input)}
                        value={presentation.name}
                        onChange={(event) => changeTitle(event.target.value)}
                    />
                    <MenuBar />
                </div>
            </div>
            <ToolBar />
        </div>
    )
}

export default Header;