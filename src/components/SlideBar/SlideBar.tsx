import "./SlideBar.css";
import Slide from "../Slide/Slide.tsx";
import {Slide as TSlide} from "../../types/types.ts";

type SlideBarProps = {
    slides: TSlide[];
}

function SlideBar({slides}: SlideBarProps) {
    return (
        <div className="slide-bar">
            {slides.length > 0 && slides.map((slide, index) => (
                <div className="slide-bar__elem" >
                    <span>{index + 1}</span>
                    <Slide id={slide.id} className="slide-bar__slide" slide={slide} data={null}/>
                </div>
            ))}
        </div>
    );
}

export default SlideBar;
