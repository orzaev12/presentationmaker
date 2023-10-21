import "./SlideBar.css";
import Slide from "../Slide/Slide.tsx";

function SlideBar() {
    return (
        <div className="slide-bar">
            <div>
                <span>1</span>
                <Slide className="slide-bar__slide"/>
            </div>
        </div>
    );
}

export default SlideBar;
