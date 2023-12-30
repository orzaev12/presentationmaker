import { GraphicBlock as TGraphicBlock} from "../../types/types";
import { CSSProperties } from "react";

type GraphicBlockProps = {
    data: TGraphicBlock;
}

function GraphicBlock({data}: GraphicBlockProps) {
    const object = data.data
    let styleList: CSSProperties;

    if (object.type == "circle")
    {
        styleList = {
            width: data.size.width,
            height: data.size.height,
            backgroundColor: object.background,
            borderRadius: data.size.width / 2,
        }
    }
    if (object.type == "square")
    {
        styleList = {
            width: data.size.width,
            height: data.size.height,
            backgroundColor: object.background,
        }
    }

    if (object.type == "triangle")
    {
        styleList = {
            width: 0,
            height: 0,
            borderLeft: `${data.size.height}px solid transparent`,
            borderRight: `${data.size.height}px solid transparent`,
            borderBottom: `${data.size.height}px solid ${object.background}`,
        }
    }
    return (
        <div style={styleList!}></div>
    )

}

export default GraphicBlock;