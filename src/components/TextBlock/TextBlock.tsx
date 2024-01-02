import { CSSProperties, useEffect, useRef } from "react";
import styles from "./TextBlock.module.css"
import { TextBlock as TTextBlock } from "../../types/types";
import {useAppActions, useAppSelector} from "../../store/types.ts";

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
    const currentSlide = useAppSelector(state => state.slides[state.indexOfCurrentSlide])
    const selectedBlockId = useAppSelector(state => state.slides[state.indexOfCurrentSlide].selectedBlockId)
    const selectedBlock = currentSlide.data?.find((block) => block.id === selectedBlockId)
    const { createAddCharacterAction, createDeleteCharacterAction } = useAppActions()
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleKeydown = (event: KeyboardEvent) => {
            if (event.key)
            {
                if (selectedBlockId === id)
                {
                    if (event.key.length === 1) {
                        createAddCharacterAction(currentSlide.id, selectedBlockId, event.key)
                    }
                    if (event.key === 'Backspace') {
                        createDeleteCharacterAction(currentSlide.id, selectedBlockId)
                    }
                    if (event.key === 'Enter') {
                        createAddCharacterAction(currentSlide.id, selectedBlockId, '\n')
                    }
                    if (event.key === 'Space') {
                        createAddCharacterAction(currentSlide.id, selectedBlockId, '\u00A0')
                    }
                }
            }
        }
        document.addEventListener('keydown', handleKeydown)
        return (() => {
            document.removeEventListener('keydown', handleKeydown)
        })
    }, [selectedBlock])
    return (
        <div ref={ref} className={styles.text}>
            <span className={styles.span} style={stylelist}>{object.value}</span>
        </div>
    )
}

export default TextBlock;