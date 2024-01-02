import {TextBlock as TTextBlock, ImageBlock as TImageBlock, GraphicBlock as TGraphicBlock } from "../../types/types";
import styles from "./Block.module.css"
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import GraphicBlock from "../GraphicBlock/GraphicBlock";
import { CSSProperties, useEffect, useRef } from "react";
import { useDragAndDropObject } from "../../hooks/useDndObject";
import {useAppActions, useAppSelector} from "../../store/types.ts";

type BlockProps = {
    data: TTextBlock | TImageBlock | TGraphicBlock | any;
    id: string;
    isWorkSpace: boolean;
}

function Block({data, id, isWorkSpace}: BlockProps) {
    const currentSlide = useAppSelector(state => state.slides[state.indexOfCurrentSlide])
    const selectedBlockId = useAppSelector(state => state.slides[state.indexOfCurrentSlide].selectedBlockId)
    const selectedBlock = currentSlide.data?.find((block) => block.id === selectedBlockId)
    const { createSetSelectedBlockAction, createChangePositionOfBlockAction, createChangeSizeOfBlockAction } = useAppActions()
    const { registerDndItem } = useDragAndDropObject()
    const ref = useRef<HTMLDivElement>(null)
    const position: CSSProperties = {
        left: data.position.x,
        top: data.position.y,
    }

    if (isWorkSpace)
    {   //выделение блока
        useEffect(() => {
            const block: HTMLDivElement = ref.current!
            const handleClick = (event: MouseEvent) => {
                if (block && block?.contains(event.target as Node))
                {
                    block.style.outline = "3px solid #1A73E8"
                    block.style.outlineOffset = "1px"
                    createSetSelectedBlockAction(currentSlide.id, id)
                } else {
                    block.style.outline = "none"
                    block.style.outlineOffset = "none"
                }
            }
            ref.current!.parentElement?.addEventListener("mousedown", handleClick)
            return () => {
                ref.current?.parentElement?.removeEventListener("mousedown", handleClick)
            }
        }, [])
        // DnD and resize objects
        useEffect(() => {
            const { onDragStart } = registerDndItem({ elementRef: ref })
            const onMouseDown = (event: MouseEvent) => {
                    onDragStart({
                        onDrag: (dragEvent) => {
                            dragEvent.preventDefault()
                            ref.current!.style.top = `${dragEvent.clientY + (data.position.y - event.clientY)}px`
                            ref.current!.style.left = `${dragEvent.clientX + (data.position.x - event.clientX)}px`
                        },
                        onDrop: (dropEvent) => {
                            const position = {
                                x: dropEvent.clientX + (data.position.x - event.clientX),
                                y: dropEvent.clientY + (data.position.y - event.clientY),
                            }
                            createChangePositionOfBlockAction(currentSlide.id, id, position)
                        },
                    })
            }
            const onMouseWheel = (event: WheelEvent) => {
                if (selectedBlockId === id && data.type !== 'text') {
                    const newSize = {
                        height: data.size.height + event.deltaY,
                        width: data.size.width + event.deltaY,
                    }
                    createChangeSizeOfBlockAction(currentSlide.id, id, newSize)
                }
            }
            ref.current!.addEventListener('mousedown', onMouseDown)
            ref.current!.addEventListener('wheel', onMouseWheel, { passive: true})
            return () => {
                ref.current?.removeEventListener('mousedown', onMouseDown)
                ref.current?.removeEventListener('wheel', onMouseWheel)
            }
        }, [selectedBlock])
    }
    return (
        <div className={styles.block} id={id} style={position} ref={ref}>
            {data.type === "text" && <TextBlock object={data} id={id}/>}
            {data.type === "image" && <ImageBlock object={data}/>}
            {data.type === "graphic" && <GraphicBlock data={data}/>}
        </div>
    )
}

export default Block;