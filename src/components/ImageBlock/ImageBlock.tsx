import { ImageBlock as TImageBlock } from "../../types/types";
import { CSSProperties } from "react"

type ImageBlockProps = {
    object: TImageBlock,
}

function ImageBlock({object}: ImageBlockProps) {
    const path = object.data;
    const styleList: CSSProperties = {
        width: object.size.width,
        height: object.size.height,
    }

    return (
        <img style={styleList} src={path} />
    )
}

export default ImageBlock;