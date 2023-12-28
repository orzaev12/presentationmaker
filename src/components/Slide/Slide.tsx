import { Slide as TSlide} from '../../types/types.ts';
import styles from "./Slide.module.css"
import classNames from 'classnames';
import { CSSProperties, useContext, useEffect, useRef, useState } from "react"
import Block from '../Block/Block.tsx';
import { PresentationContext } from '../../context/presentation.tsx';

type SlideProps = {
    className?: string;
    slide: TSlide;
    isWorkSpace: boolean;
}

function Slide({className, slide, isWorkSpace}: SlideProps) {
    const { setSelectedBlockId } = useContext(PresentationContext)
    const [select, setSelect] = useState(false)
    const background: CSSProperties = {
        background: slide.background,
    }
    const ref = useRef<HTMLDivElement>(null)

    // если блок не выделен
    if (isWorkSpace)
    {
        useEffect(() => {
            const children = Array.from(ref.current!.children)
            const handleClick = (event: MouseEvent) => {
                children.map((child) => {
                    if (child && child.contains(event.target as Node))
                    {
                        setSelect(true)
                    }
                })

                if (!select) {
                    setSelectedBlockId('')
                }
            }
            document.addEventListener('mousedown', handleClick)
            return (() => {
                document.removeEventListener('mousedown', handleClick)
            })
        }, [])
    }

    return (
        <div ref={ref} id={slide.id} className={classNames(styles.slide, className)} style={background}>
            {slide.data?.map((block) => (
                <Block id={block.id} key={block.id} data={block} isWorkSpace={isWorkSpace}/>
            ))}
        </div>
    )
}

export default Slide;
