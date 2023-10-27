import { Slide as TSlide} from '../../types/types.ts';
import styles from "./Slide.module.css"
import classNames from 'classnames';
import { CSSProperties } from "react"
import Block from '../Block/Block.tsx';

type SlideProps = {
    className?: string;
    slide: TSlide;
}

function Slide({className, slide}: SlideProps) {
    const background: CSSProperties = {
        background: slide.background,
    }

    return (
        <div id={slide.id} className={classNames(styles.slide, className)} style={background}>
            {slide.data?.map((block) => (
                <Block id={block.id} key={block.id} data={block}/>
            ))}
        </div>
    )
}

export default Slide;
