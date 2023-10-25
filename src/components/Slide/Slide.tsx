import { Slide as TSlide, TextBlock, ImageBlock, GraphicBlock} from '../../types/types.ts';
import "./Slide.css"
import classNames from 'classnames';
import { CSSProperties } from "react"

type SlideProps = {
    className?: string;
    slide: TSlide;
    data: Array<TextBlock | ImageBlock | GraphicBlock> | null;
}

function Slide({className, slide, data}: SlideProps) {
    const background: CSSProperties = {
        background: slide.background,
    }



    return (
        <div className={classNames("slide", className)} style={background}></div>
    )
}

export default Slide;
