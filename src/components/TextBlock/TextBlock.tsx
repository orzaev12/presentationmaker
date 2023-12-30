import { useContext, useEffect, useRef, useState } from "react";
import styles from "./TextBlock.module.css"
import { TextBlock as TTextBlock } from "../../types/types";
import Char from "../Char/Char.tsx"
import { PresentationContext } from "../../context/presentation.tsx";
import { char } from "../../const/const.ts";

type TextBlockProps = {
    object: TTextBlock;
    id: string;
}

function TextBlock({object, id}: TextBlockProps) {
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
                        event.key.length === 1 && object?.chars?.push({ ...char, value: event.key})
                        event.key == 'Backspace' && object?.chars?.pop()
                        event.key === 'Enter' && object?.chars?.push({ ...char, value: '\n' })
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
            {object.chars?.map((item, index) => (
                <Char char={item} key={index} />
            ))}
        </div>
    )
}

export default TextBlock;