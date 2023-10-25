import "./Editor.css";
import Slide from "../Slide/Slide.tsx";
import SlideBar from "../SlideBar/SlideBar";
import {Presentation} from "../../types/types.ts";

type EditorProps = {
    presentation: Presentation;
}

function Editor({presentation}: EditorProps) {
    return(
        <div className="editor">
            <SlideBar slides={presentation.slides}/>
            <Slide slide={presentation.currentSlide}/>
        </div>
    );
}

export default Editor;
