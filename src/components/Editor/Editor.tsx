import styles from "./Editor.module.css"
import Slide from "../Slide/Slide.tsx";
import SlideBar from "../SlideBar/SlideBar";
import {Presentation} from "../../types/types.ts";

type EditorProps = {
    presentation: Presentation;
}

function Editor({presentation}: EditorProps) {
    return(
        <div className={styles.editor}>
            <SlideBar slides={presentation.slides} current={presentation.currentSlide}/>
            <Slide className={styles.slide} slide={presentation.currentSlide}/>
        </div>
    );
}

export default Editor;
