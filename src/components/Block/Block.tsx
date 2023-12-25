import {TextBlock as TTextBlock, ImageBlock as TImageBlock, GraphicBlock as TGraphicBlock} from "../../types/types";
import TextBlock from "../TextBlock/TextBlock";
import ImageBlock from "../ImageBlock/ImageBlock";
import GraphicBlock from "../GraphicBlock/GraphicBlock";
import { CSSProperties } from "react"

type BlockProps = {
    data: TTextBlock | TImageBlock | TGraphicBlock | any;
    id: string;
}

function Block({data, id}: BlockProps) {
    const styleList: CSSProperties = {
        position: "absolute",
        width: data.size.width,
        height: data.size.height,
        left: data.position.x,
        top: data.position.y,
    }
    let block;
    if (data.type == "text")
    {
        block = <TextBlock object={data}/>
    }
    if (data.type == "image")
    {
        block = <ImageBlock object={data} />
    }
    if (data.type == "graphic")
    {
        block = <GraphicBlock object={data.data}/>
    }

    return (
        <div className="block" id={id} style={styleList}>
            {block}
        </div>
    )
}

export default Block;