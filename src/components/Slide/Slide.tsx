import { Slide as TSlide} from '../../types/types.ts';
import styles from "./Slide.module.css"
import classNames from 'classnames';
import { CSSProperties, useContext, useEffect, useRef, useState } from "react"
import Block from '../Block/Block.tsx';
import { PresentationContext } from '../../context/presentation.tsx';
import { RegisterDndItemFn } from '../../hooks/useDndSlide.ts';

type SlideProps = {
    className?: string;
    slide: TSlide;
    isWorkSpace: boolean;
    registerDndItem?: RegisterDndItemFn;
    index?: number;
}

function Slide({className, slide, isWorkSpace, registerDndItem, index}: SlideProps) {
    const { setSelectedBlockId } = useContext(PresentationContext)
    const [select, setSelect] = useState(false)
    const background: CSSProperties = {
        background: slide.background,
    }
    const ref = useRef<HTMLDivElement>(null)

    // if (!isWorkSpace && registerDndItem)
    // {
    //     useEffect(() => {
    //         const { onDragStart } = registerDndItem(index!, { elementRef: ref })

    //         const onMouseDown = (event: MouseEvent) => {
    //             onDragStart({
    //                 onDrag: (dragEvent) => {
    //                     ref.current!.style.position = 'relative'
	// 				    ref.current!.style.zIndex = '1'
	// 				    //ref.current!.style.boxShadow = 'black 2px 2px 4px'
	// 				    ref.current!.style.top = `${dragEvent.clientY +  event.clientY}px`
    //                 },
    //                 onDrop: (dropEvent) => {
    //                     ref.current!.style.position = ''
	// 				    ref.current!.style.zIndex = ''
	// 				    ref.current!.style.boxShadow = ''
	// 				    ref.current!.style.top = ''
    //                 }
    //             })
    //         }
    //         ref.current?.addEventListener('mousedown', onMouseDown)
    //         return (() => ref.current?.removeEventListener('mousedown', onMouseDown))
    //     }, [])
    // }

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
            ref.current!.addEventListener('mousedown', handleClick)
            return (() => {
                ref.current!.removeEventListener('mousedown', handleClick)
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
