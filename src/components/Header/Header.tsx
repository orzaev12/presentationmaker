import styles from "./Header.module.css"
import { useEffect, useRef } from "react";
import MenuBar from "../MenuBar/MenuBar";
import ToolBar from "../ToolBar/ToolBar";
import classNames from "classnames";
import {useAppActions, useAppSelector} from "../../store/types.ts";

function Header() {
    const title = useAppSelector(state => state.presentation.title)
    const currentSlide = useAppSelector(state => state.presentation.slides[state.presentation.indexOfCurrentSlide])
    const { createSetSelectedBlockAction } = useAppActions()
    const ref = useRef<HTMLInputElement>(null)
    const previewWindow = document.getElementById("preview-window")

    const { createChangeTitleAction } = useAppActions()

    useEffect(() => {
        const onKeyDown = () => {
            ref.current!.style.width = `${(ref.current!.value.length + 5) * 9}px`;
            }
        const elem = ref.current!
        elem.addEventListener('keydown', onKeyDown)
        return () => elem.removeEventListener('keydown', onKeyDown)
    }, [])

    const previewMode = () => {
        const block = document.getElementById(currentSlide.selectedBlockId!)
        if (block) {
            block!.style.outline = "none"
        }
        createSetSelectedBlockAction(currentSlide.id, null)
        previewWindow!.requestFullscreen()
    }

    useEffect(() => {
        const onFullScreen = () => {
            if (document.fullscreenElement)
            {
                previewWindow!.style.pointerEvents = 'none'
            } else {
                previewWindow!.style.pointerEvents = 'auto'
            }
        }
        document.addEventListener('fullscreenchange', onFullScreen)
        return (() => {
            document.removeEventListener('fullscreenchange', onFullScreen)
        })
    })


    return (
        <div className={styles.header}>
            <div className={styles.infoRow}>
                <img src="./coconut.svg" className={styles.icon} alt={"coconut"} />
                <div className={styles.infoColumn}>
                    <input
                        name={'title'}
                        maxLength={50}
                        ref={ref}
                        className={classNames(styles.input)}
                        value={title}
                        onChange={(event) => createChangeTitleAction(event.target.value)}
                    />
                    <MenuBar />
                </div>
                <button className={styles.button} onClick={() => previewMode()}>Просмотр</button>
            </div>
            <ToolBar />
        </div>
    )
}

export default Header;