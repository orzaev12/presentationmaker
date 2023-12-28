import {TextBlock as TTextBlock, ImageBlock as TImageBlock, GraphicBlock as TGraphicBlock } from "../../types/types";
import styles from "./Block.module.css"
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import GraphicBlock from "../GraphicBlock/GraphicBlock";
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { PresentationContext } from "../../context/presentation";
import { useDnD } from "../../hooks/useDndObject";

type BlockProps = {
    data: TTextBlock | TImageBlock | TGraphicBlock | any;
    id: string;
}

function Block({data, id}: BlockProps) {
    const { selectedBlockId, setSelectedBlockId } = useContext(PresentationContext)
    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
    const { registerDndItem } = useDnD()
    const ref = useRef<HTMLDivElement | null>(null)
    const position: CSSProperties = {
        left: data.position.x,
        top: data.position.y,
    }

    useEffect(() => {
        const block: HTMLDivElement = ref.current!
        const handleClick = (event: MouseEvent) => {
            if (block && block?.contains(event.target as Node))
            {
                block.style.outline = "3px solid #1A73E8"
                block.style.outlineOffset = "1px"
                setSelectedBlockId(id)
            } else {
                block.style.outline = "none"
                block.style.outlineOffset = "none"
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    useEffect(() => {
        const { onDragStart } = registerDndItem({
            elementRef: ref,
        })
        const onMouseDown = (event: MouseEvent) => {
            if (selectedBlockId === id)
            {
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
                        const block = newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.find((elem) => elem.id == id)!
                        block.position = position
                        setPresentation(newPresentation)
                    },
                })
            }
        }
        ref.current!.addEventListener('mousedown', onMouseDown)
        return () => {
            ref.current!.removeEventListener('mousedown', onMouseDown)
        }
    }, [selectedBlockId])

    return (
        <div className={styles.block} id={id} style={position} ref={ref}>
            {data.type === "text" && <TextBlock object={data} id={id}/>}
            {data.type === "image" && <ImageBlock object={data}/>}
            {data.type === "graphic" && <GraphicBlock data={data}/>}
        </div>
    )
}

export default Block;