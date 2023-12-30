import styles from "./SlideBar.module.css"
import Slide from "../Slide/Slide.tsx";
import { useContext, useEffect } from "react";
import { PresentationContext } from "../../context/presentation.tsx";
import classNames from "classnames";
import { useDragAndDropSlide } from "../../hooks/useDndSlide.ts";

function SlideBar() {
    const { presentation, setPresentation, setSelectedBlockId } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
    const indexOfCurrentSlide = newPresentation.indexOfCurrentSlide
    const SetCurrentSlide = (index: number) => {
        index !== indexOfCurrentSlide && setSelectedBlockId('')
        newPresentation.indexOfCurrentSlide = index
        setPresentation(newPresentation)
    }

    const { registerDndItem } = useDragAndDropSlide({
		onOrderChange: (from, to) => {
			const newSlides = newPresentation.slides
			const removed = newSlides.splice(from, 1)
			newSlides.splice(to, 0, removed[0])
            newPresentation.indexOfCurrentSlide = to
			setPresentation(newPresentation)
		}
	})

    return (
        <div className={styles.slidebar}>
            {presentation.slides.map((slide, index) => (
                <div key={index} className={styles.elem} >
                    <span className={styles.index}>{index + 1}</span>
                    <div className={styles.wrapper} onMouseDown={() => SetCurrentSlide(index)}>
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
