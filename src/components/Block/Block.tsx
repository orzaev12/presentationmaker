import {TextBlock as TTextBlock, ImageBlock as TImageBlock, GraphicBlock as TGraphicBlock} from "../../types/types";
import styles from "./Block.module.css"
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import GraphicBlock from "../GraphicBlock/GraphicBlock";
import {CSSProperties, useEffect, useRef} from "react";
import {useDragAndDropObject} from "../../hooks/useDndObject";
import {useAppActions, useAppSelector} from "../../store/types.ts";
import classNames from "classnames";

type BlockProps = {
    data: TTextBlock | TImageBlock | TGraphicBlock | any;
    id: string;
    isWorkSpace: boolean;
}

function Block({data, id, isWorkSpace}: BlockProps) {
    const currentSlide = useAppSelector(state => state.slides[state.indexOfCurrentSlide])
    const selectedBlockId = useAppSelector(state => state.slides[state.indexOfCurrentSlide].selectedBlockId)
    const selectedBlock = currentSlide.data?.find((block) => block.id === selectedBlockId)
    const {
        createSetSelectedBlockAction,
        createChangePositionOfBlockAction,
        createChangeSizeOfBlockAction
    } = useAppActions()
    const {registerDndItem} = useDragAndDropObject()
    const ref = useRef<HTMLDivElement>(null)
    const refPoint = useRef<HTMLDivElement>(null)
    const refBlock = useRef<HTMLDivElement>(null)
    const position: CSSProperties = {
        left: data.position.x,
        top: data.position.y,
    }

    if (isWorkSpace) {   //выделение блока
        useEffect(() => {
            const block: HTMLDivElement = ref.current!
            const handleClick = (event: MouseEvent) => {
                if (block && block?.contains(event.target as Node)) {
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
            const {onDragStart} = registerDndItem({elementRef: refBlock})
            const onMouseDown = (event: MouseEvent) => {
                onDragStart(
                    {
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
            refBlock.current!.addEventListener('mousedown', onMouseDown)
            refBlock.current!.addEventListener('wheel', onMouseWheel, {passive: true})
            return () => {
                refBlock.current?.removeEventListener('mousedown', onMouseDown)
                refBlock.current?.removeEventListener('wheel', onMouseWheel)
            }
        }, [selectedBlock])


        useEffect(() => {
            const {onDragStart} = registerDndItem({elementRef: refPoint})
            const onMouseDown = (event: MouseEvent) => {
                onDragStart(
                    {
                        onDrag: (dragEvent) => {
                            dragEvent.preventDefault()
                            // @ts-ignore
                            let blockStyleList = ref.current!.firstChild!.firstChild!.style;
                            let currentWidth = dragEvent.clientX + (data.size.width - event.clientX)
                            let currentHeight = dragEvent.clientY + (data.size.height - event.clientY)

                            if (data.data == "triangle") {
                                blockStyleList.borderLeft = `${currentWidth / 2}px solid transparent`
                                blockStyleList.borderRight = `${currentWidth / 2}px solid transparent`
                                blockStyleList.borderBottom = `${currentHeight}px solid ${data.background}`
                            } else {
                                blockStyleList.height = `${currentHeight}px`
                                blockStyleList.width = `${currentWidth}px`
                                if (data.data == 'circle') {
                                    blockStyleList.borderRadius = `${currentWidth}px / ${currentHeight}px `
                                }
                            }
                        },
                        onDrop: (dropEvent) => {
                            const size = {
                                width: dropEvent.clientX + (data.size.width - event.clientX),
                                height: dropEvent.clientY + (data.size.height - event.clientY),
                            }
                            createChangeSizeOfBlockAction(currentSlide.id, id, size)
                        },
                    })
            }
            refPoint.current!.addEventListener('mousedown', onMouseDown)
            return () => {
                refPoint.current?.removeEventListener('mousedown', onMouseDown)
            }
        }, [selectedBlock])
    }
    return (
        <div className={styles.block} style={position} id={id} ref={ref}>
            <div ref={refBlock}>
                {data.type === "text" && <TextBlock object={data} id={id}/>}
                {data.type === "image" && <ImageBlock object={data}/>}
                {data.type === "graphic" && <GraphicBlock data={data}/>}
            </div>
            <div
                className={isWorkSpace && id === selectedBlockId && data.type != "text" ? classNames(styles.point) : classNames(styles.point, styles.hide)}
                ref={refPoint}></div>
        </div>
    )
}

export default Block;