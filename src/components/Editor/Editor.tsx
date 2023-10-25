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
            <Slide className="editor__slide" slide={presentation.currentSlide} id={presentation.currentSlide.id} data={null}/>
        </div>
    );
}

export default Editor;
