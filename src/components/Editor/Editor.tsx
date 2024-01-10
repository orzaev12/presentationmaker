import styles from "./Editor.module.css"
import Slide from "../Slide/Slide.tsx";
import SlideBar from "../SlideBar/SlideBar";
import {useAppActions, useAppSelector} from "../../store/types.ts";
import { useEffect, useRef, useState } from "react";

function Editor() {
    const currentSlide = useAppSelector(state => state.presentation.slides[state.presentation.indexOfCurrentSlide])
    const { createSetSelectedBlockAction } = useAppActions()
    const ref = useRef<HTMLDivElement>(null)

    const [select, setSelect] = useState(false)
    useEffect(() => { // для выделения блока
        const children = Array.from(ref.current!.children[0].children)
        setSelect(true)
        const handleClick = (event: MouseEvent) => {
            children.map((child) => {
                if (child && child.contains(event.target as Node))
                {
                    setSelect(false)
                }
            })
            if (!select) {
                createSetSelectedBlockAction(currentSlide.id, null)
            }
        }
        ref.current!.addEventListener('mousedown', handleClick)
        return (() => {
            ref.current!.removeEventListener('mousedown', handleClick)
        })
    }, [currentSlide])

    return(
        <div className={styles.editor}>
            <SlideBar />
            <div className={styles.workspace} id="preview-window" ref={ref}>
                <Slide className={styles.slide} slide={currentSlide} isWorkSpace={true}/>
            </div>
        </div>
    );
}

export default Editor;
