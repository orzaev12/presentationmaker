import styles from "./SlideBar.module.css"
import Slide from "../Slide/Slide.tsx";
import { useContext } from "react";
import { PresentationContext } from "../../context/presentation.tsx";
import classNames from "classnames";

function SlideBar() {
    const { presentation, setPresentation} = useContext(PresentationContext)
    const indexOfCurrentSlide = presentation.indexOfCurrentSlide
    return (
        <div className={styles.slidebar}>
            {presentation.slides.map((slide, index) => (
                <div key={index} className={styles.elem} >
                    <span>{index + 1}</span>
                    <div className={styles.wrapper} >
                        <Slide className={indexOfCurrentSlide === index ? classNames(styles.slide, styles.current) : classNames(styles.slide, styles.aim)} slide={slide} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SlideBar;
