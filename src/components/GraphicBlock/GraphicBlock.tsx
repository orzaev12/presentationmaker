import { Triangle, Circle, Square } from "../../types/types";
import { CSSProperties } from "react";

type GraphicBlockProps = {
    object: Triangle | Circle | Square;
}

function GraphicBlock({object}: GraphicBlockProps) {
    let styleList;

    if (object.type == "circle")
    {
        let list: CSSProperties = {
            width: object.size.width,
            height: object.size.height,
            backgroundColor: object.background,
            borderRadius: object.size.width / 2,
        }
        styleList = list;
    }
    if (object.type == "square")
    {
        let list: CSSProperties = {
            width: object.size.width,
            height: object.size.height,
            backgroundColor: object.background,
        }
        styleList = list;
    }

    if (object.type == "triangle")
    {
        let list: CSSProperties = {
            width: 0,
            height: 0,
            borderLeft: `${object.size.firstSide}px solid transparent`,
            borderRight: `${object.size.secondSide}px solid transparent`,
            borderBottom: `${object.size.thirdSide}px solid ${object.background}`,
        }
        styleList = list;
    }

    return (
        <div style={styleList}></div>
    )

}

export default GraphicBlock;