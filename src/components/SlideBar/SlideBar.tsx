import styles from "./SlideBar.module.css"
import Slide from "../Slide/Slide.tsx";
import { useContext } from "react";
import { PresentationContext } from "../../context/presentation.tsx";
import classNames from "classnames";
import { useDragAndDropSlide } from "../../hooks/useDndSlide.ts";
import {useAppActions, useAppSelector} from "../../store/types.ts";

function SlideBar() {
    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
    const slides = useAppSelector(state => state.slides)
    const indexOfCurrentSlide = useAppSelector(state => state.indexOfCurrentSlide)

    const { createSetCurrentSlide } = useAppActions()

    const { registerDndItem } = useDragAndDropSlide({
		onOrderChange: (from, to) => {
			const newSlides = slides
			const removed = newSlides.splice(from, 1)
			newSlides.splice(to, 0, removed[0])
            newPresentation.indexOfCurrentSlide = to
			setPresentation(newPresentation)
		}
	})

    return (
        <div className={styles.slidebar}>
            {slides.map((slide, index) => (
                <div key={index} className={styles.elem} >
                    <span className={styles.index}>{index + 1}</span>
                    <div className={styles.wrapper} onMouseDown={() => createSetCurrentSlide(index)}>
                        <Slide className={indexOfCurrentSlide === index ? classNames(styles.slide, styles.current) : classNames(styles.slide, styles.aim)}
                            slide={slide}
                            isWorkSpace={false}
                            index={index}
                            registerDndItem={registerDndItem}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SlideBar;
