import styles from "./Editor.module.css"
import Slide from "../Slide/Slide.tsx";
import SlideBar from "../SlideBar/SlideBar";
import { useContext } from "react";
import { PresentationContext } from "../../context/presentation.tsx";

function Editor() {
    const { presentation } = useContext(PresentationContext)

    return(
        <div className={styles.editor}>
            <SlideBar />
            <Slide className={styles.slide} slide={presentation.slides[presentation.indexOfCurrentSlide]} isWorkSpace={true}/>
        </div>
    );
}

export default Editor;
