import styles from "./Header.module.css"
import { useEffect, useRef } from "react";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";
import classNames from "classnames";
import {useAppActions, useAppSelector} from "../../store/types.ts";

function Header() {
    const title = useAppSelector(state => state.title)
    const ref = useRef<HTMLInputElement>(null)

    const { createChangeTitleAction } = useAppActions()

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
                        value={title}
                        onChange={(event) => createChangeTitleAction(event.target.value)}
                    />
                    <MenuBar />
                </div>
            </div>
            <ToolBar />
        </div>
    )
}

export default Header;