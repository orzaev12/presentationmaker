import {TextBlock as TTextBlock, ImageBlock as TImageBlock, GraphicBlock as TGraphicBlock } from "../../types/types";
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import GraphicBlock from "../GraphicBlock/GraphicBlock";
import { CSSProperties, useContext, useEffect, useRef } from "react";
import { PresentationContext } from "../../context/presentation";

type BlockProps = {
    data: TTextBlock | TImageBlock | TGraphicBlock | any;
    id: string;
}

function Block({data, id}: BlockProps) {
    const { setSelectedBlockId } = useContext(PresentationContext)
    const ref = useRef<HTMLDivElement | null>(null)
    const styleList: CSSProperties = {
        position: "absolute",
        left: data.position.x,
        top: data.position.y,
    }

    if (data.type === 'graphic')
    {
        styleList.width = data.size.width,
        styleList.height = data.size.height
    }
    if (data.type === 'text')
    {
        styleList.minHeight = 24
        styleList.minWidth = 5
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
                setSelectedBlockId('')
            }
        }
        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])
    return (
        <div className="block" id={id} style={styleList} ref={ref}>
            {data.type === "text" && <TextBlock object={data} id={id}/>}
            {data.type === "image" && <ImageBlock object={data}/>}
            {data.type === "graphic" && <GraphicBlock data={data}/>}
        </div>
    )
}

export default Block;