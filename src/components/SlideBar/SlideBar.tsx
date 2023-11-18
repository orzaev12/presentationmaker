import styles from "./SlideBar.module.css"
import Slide from "../Slide/Slide.tsx";
import {Slide as TSlide} from "../../types/types.ts";

type SlideBarProps = {
    slides: TSlide[];
    current: TSlide;
}

function SlideBar({slides}: SlideBarProps) {
    return (
        <div className={styles.slidebar}>
            {slides.map((slide, index) => (
                <div key={index} className={styles.elem} >
                    <span>{index + 1}</span>
                    <div className={styles.wrapper}>
                        <Slide className={styles.slide} slide={slide} />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SlideBar;
