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

    return (<p style={styleList}>{char.value}</p>)
}

export default Char;