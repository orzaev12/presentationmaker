import { Slide as TSlide, TextBlock, ImageBlock, GraphicBlock} from '../../types/types.ts';
import "./Slide.css"
import classNames from 'classnames';
import { CSSProperties } from "react"

type SlideProps = {
    id: string;
    className?: string;
    slide: TSlide;
    data: Array<TextBlock | ImageBlock | GraphicBlock> | null;
}

function Slide({className, slide}: SlideProps) {
    const background: CSSProperties = {
        background: slide.background,
    }



    return (
        <div id={slide.id} className={classNames("slide", className)} style={background}></div>
    )
}

export default Slide;
