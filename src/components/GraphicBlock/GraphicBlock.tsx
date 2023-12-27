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
            width: object.size.width,
            height: object.size.height,
            backgroundColor: object.background,
            borderRadius: object.size.width / 2,
        }
    }
    if (object.type == "square")
    {
        styleList = {
            width: object.size.width,
            height: object.size.height,
            backgroundColor: object.background,
        }
    }

    if (object.type == "triangle")
    {
        styleList = {
            width: 0,
            height: 0,
            borderLeft: `${object.size.firstSide}px solid transparent`,
            borderRight: `${object.size.secondSide}px solid transparent`,
            borderBottom: `${object.size.thirdSide}px solid ${object.background}`,
        }
    }

    return (
        <div style={styleList!}></div>
    )

}

export default GraphicBlock;