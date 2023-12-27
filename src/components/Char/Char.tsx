import { Char  as TChar} from "../../types/types";
import { CSSProperties } from "react"

type CharProps = {
    char: TChar;
}

function Char({char}: CharProps) {
    const styleList: CSSProperties = {
        color: char.color,
        fontFamily: char.fontFamily,
        fontSize: char.fontSize,
    }

    return (
        char.value === '\n' ? <br /> : <span style={styleList}>{char.value}</span>
    )
}

export default Char;