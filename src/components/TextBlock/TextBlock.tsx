import { CSSProperties, useContext, useEffect, useRef, useState } from "react";
import styles from "./TextBlock.module.css"
import { TextBlock as TTextBlock } from "../../types/types";
import { PresentationContext } from "../../context/presentation.tsx";

type TextBlockProps = {
    object: TTextBlock;
    id: string;
}

function TextBlock({object, id}: TextBlockProps) {
    const stylelist: CSSProperties = {
        fontFamily: object.fontFamily,
        fontSize: object.fontSize,
        color: object.color,
        textDecoration: object.underline ? "underline" : "",
        fontStyle: object.italic ? "italic" : "",
        fontWeight: object.bold ? "bold" : "",
    }
    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
    const ref = useRef<HTMLDivElement>(null)
    const [selected, setSelected] = useState(false)

    useEffect(() => {
        const block: HTMLDivElement = ref.current!
        const handleClick = (event: MouseEvent) => {
            if (block && block?.contains(event.target as Node)) {
                setSelected(true)
            } else {
                setSelected(false)
            }
        }
        const handleKeydown = (event: KeyboardEvent) => {
            if (selected && event.key)
            {
                newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.map((item, index) => {
                    if (item.id === id)
                    {
                        const currentSlide = newPresentation.slides[newPresentation.indexOfCurrentSlide]
                        if (event.key.length === 1) {
                            object.value += event.key
                        }
                        if (event.key === 'Backspace') {
                            object.value = object.value.slice(0, -1)
                        }
                        if (event.key === 'Enter') {
                            object.value += "\n"
                        }
                        if (event.key === 'Space') {
                            object.value += "\u00A0"
                        }
                        currentSlide.data![index] = object
                        setPresentation(newPresentation)
                    }
                })
            }
        }
        document.addEventListener('mousedown', handleClick)
        document.addEventListener('keydown', handleKeydown)
        return (() => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('keydown', handleKeydown)
        })
    })

    return (
        <div ref={ref} className={styles.text}>
            <span className={styles.span} style={stylelist}>{object.value}</span>
        </div>
    )
}

export default TextBlock;