import { GraphicBlock as TGraphicBlock} from "../../types/types";
import { CSSProperties } from "react";

type GraphicBlockProps = {
    data: TGraphicBlock;
}

function GraphicBlock({data}: GraphicBlockProps) {
    let styleList: CSSProperties;

    if (data.data == "circle")
    {
        styleList = {
            width: data.size.width,
            height: data.size.height,
            backgroundColor: data.background,
            borderRadius: `${data.size.width / 2}px / ${data.size.height / 2}px`,
        }
    }
    if (data.data == "square")
    {
        styleList = {
            width: data.size.width,
            height: data.size.height,
            backgroundColor: data.background,
        }
    }

    if (data.data == "triangle")
    {
        styleList = {
            width: 0,
            height: 0,
            borderLeft: `${data.size.width / 2}px solid transparent`,
            borderRight: `${data.size.width / 2}px solid transparent`,
            borderBottom: `${data.size.height}px solid ${data.background}`,
        }
    }
    return (
        <div style={styleList!}></div>
    )

}

export default GraphicBlock;