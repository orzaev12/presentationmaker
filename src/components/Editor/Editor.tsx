import "./Editor.css";
import Slide from "../Slide/Slide.tsx";
import SlideBar from "../SlideBar/SlideBar";


function Editor() {
    return(
        <div className="editor">
            <SlideBar />
            <Slide />
        </div>
    );
}

export default Editor;
