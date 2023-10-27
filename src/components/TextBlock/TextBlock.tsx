import { TextBlock as TTextBlock } from "../../types/types";
import Char from "../Char/Char.tsx"

type TextBlockProps = {
    object: TTextBlock;
}

function TextBlock({object}: TextBlockProps) {

    return (
        <div>{object.chars?.map((item, index) => (
            <Char char={item} key={index} />
            ))}
        </div>
    )
}

export default TextBlock;