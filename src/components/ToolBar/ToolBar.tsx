import styles from "./ToolBar.module.css"
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TitleIcon from '@mui/icons-material/Title';
import ImageIcon from '@mui/icons-material/Image';
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import CategoryIcon from '@mui/icons-material/Category';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { useContext } from "react";
import { PresentationContext } from "../../context/presentation";
import { TextBlock as TTextBlock, GraphicBlock as TGraphicBlock} from "../../types/types";
import {useAppActions, useAppSelector} from "../../store/types.ts";
import {createSetUnderlineTextAction} from "../../store/actionCreators.ts";

function ToolBar()
{
    const { createSetCurrentSlide, createAddSlideAction, createRemoveSlideAction, createChangeBackgroundAction,
        createAddTextBlockAction, createUndoAction, createRedoAction, createAddGraphicBlockAction, createAddImageBlockAction } = useAppActions()
    const slides = useAppSelector(state => state.slides)
    const indexOfCurrentSlide = useAppSelector(state => state.indexOfCurrentSlide)
    const currentSlide = useAppSelector(state => state.slides[indexOfCurrentSlide])
    const selectedBlockId = useAppSelector(state => state.slides[indexOfCurrentSlide].selectedBlockId)
    const selectedBlock = currentSlide.data?.find((block) => block.id === selectedBlockId)

    const { presentation, setPresentation } = useContext(PresentationContext)
    const newPresentation = { ...presentation }
//    const block = newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.find((block) => block.id === selectedBlockId)

    const addSlide = () => {
        createAddSlideAction(indexOfCurrentSlide)
        createSetCurrentSlide(indexOfCurrentSlide + 1)
    }

    const removeSlide = () => {
        let indexOfNewCurrentSlide = indexOfCurrentSlide
        indexOfCurrentSlide == slides.length - 1 && indexOfNewCurrentSlide--
        createSetCurrentSlide(indexOfNewCurrentSlide)
        createRemoveSlideAction(slides[indexOfCurrentSlide].id)
    }

    const changeColorOfSlide = (color: string) => {
        createChangeBackgroundAction(slides[indexOfCurrentSlide], color)
    }

    const addTextBlock = () => {
        createAddTextBlockAction(currentSlide.id)
    }

    const addGraphicBlock = (type: string) => {
        createAddGraphicBlockAction(currentSlide.id, type)
    }

    const addImageBlock = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (!event.target.files)
        {
            return
        }
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            if (!event.target?.result)
            {
                return
            }
            try {
                createAddImageBlockAction(currentSlide.id, event.target.result.toString())
            } catch (error) {
                alert("Invalid file!")
            }
        };
        reader.readAsDataURL(file)
    }

    const setUnderlineText = () => {
        if (selectedBlock?.type === 'text') {
            createSetUnderlineTextAction(currentSlide.id, selectedBlock.id)
        }
        // if (block!.type === 'text')
        // {
        //     const textBlock = block as TTextBlock
        //     textBlock.underline = !textBlock.underline
        //     setPresentation(newPresentation)
        // }
    }

    const setBoldText = () => {
        if (selectedBlock!.type === 'text')
        {
            const textBlock = selectedBlock as TTextBlock
            textBlock.bold = !textBlock.bold
            setPresentation(newPresentation)
        }
    }

    const setItalicText = () => {
        if (selectedBlock!.type === 'text')
        {
            const textBlock = selectedBlock as TTextBlock
            textBlock.italic = !textBlock.italic
            setPresentation(newPresentation)
        }
    }

    const changeFontFamilyOfText = (fontFamily: string) => {
        const textBlock = selectedBlock as TTextBlock
        textBlock.fontFamily = fontFamily
        setPresentation(newPresentation)
    }

    const changeFontSizeOfText = (fontSize: string) => {
        const textBlock = selectedBlock as TTextBlock
        textBlock.fontSize = parseInt(fontSize)
        setPresentation(newPresentation)
    }

    const changeColorOfGraphicBlock = (color: string) => {
        if (selectedBlock!.type === 'graphic')
        {
            const graphicBlock = selectedBlock as TGraphicBlock
            graphicBlock.background = color
            console.log(newPresentation)
            setPresentation(newPresentation)
        }
    }

    return (
        <div className={styles.toolbar}>
            <IconButton onClick={() => createUndoAction()}><UndoIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton onClick={() => createRedoAction()}><RedoIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <hr className={styles.separate} />
            <IconButton onClick={() => addSlide()}><AddIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            {slides?.length == 1
                ? <IconButton disabled><DeleteIcon className={styles.button} sx={{ fontSize: 17}}/></IconButton>
                : <IconButton onClick={() => removeSlide()}><DeleteIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            }
            <label htmlFor="colors" className={styles.text}>Фон</label>
            <select
                className={styles.select}
                id="colors" name="colors"
                value={currentSlide.background}
                onChange={(event) => changeColorOfSlide(event.target.value)}
            >
                <option value="#FFFFFF">Белый</option>
                <option value="#000000">Черный</option>
                <option value="#FF0000">Красный</option>
                <option value="#008000">Зеленый</option>
                <option value="#0000FF">Синий</option>
                <option value="#8B00FF">Фиолетовый</option>
                <option value="#FFFF00">Желтый</option>
                <option value="#FFA500">Оранжевый</option>
                <option value="#808080">Серый</option>
            </select>
            <hr className={styles.separate} />
            <IconButton onClick={() => addTextBlock()}><TitleIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            {selectedBlock?.type === 'text' &&
                <div className={styles.flex}>
                    <IconButton onClick={() => { setBoldText() }}><FormatBoldIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <IconButton onClick={() => { setUnderlineText() }}><FormatUnderlinedIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <IconButton onClick={() => { setItalicText() }}><FormatItalicIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <label htmlFor="fontFamilies" className={styles.text}>Шрифт</label>
                    <select
                        className={styles.select}
                        id="fontFamilies" name="fontFamilies"
                        value={(selectedBlock as TTextBlock).fontFamily}
                        onChange={(event) => changeFontFamilyOfText(event.target.value)}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Inherit">Inherit</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <label htmlFor="fontSize" className={styles.text}>Размер</label>
                    <input className={styles.input} type="number" value={(selectedBlock as TTextBlock).fontSize} onChange={(event) => changeFontSizeOfText(event.target.value)} />
                </div>
            }
            <IconButton>
                <label className={styles.button} htmlFor="image_uploads"><ImageIcon sx={{ fontSize: 17}}/></label>
                <input
                    className={styles.none}
                    id='image_uploads'
                    type='file'
                    accept={'image/png, image/jpeg'}
                    onChange={(event) => addImageBlock(event)}
                />
            </IconButton>
            <IconButton onClick={() => addGraphicBlock("circle")}><CircleIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton onClick={() => addGraphicBlock("square")}><SquareIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton onClick={() => addGraphicBlock("triangle")}><CategoryIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            {selectedBlock?.type === 'graphic' &&
                <div className={styles.flex}>
                    <label htmlFor="graphicColors" className={styles.text}>Цвет фигуры</label>
                    <select
                        className={styles.select}
                        id="graphicColors" name="graphicColors"
                        value={(selectedBlock as TGraphicBlock).background}
                        onChange={(event) => changeColorOfGraphicBlock(event.target.value)}
                    >
                        <option value="#FFFFFF">Белый</option>
                        <option value="#000000">Черный</option>
                        <option value="#FF0000">Красный</option>
                        <option value="#008000">Зеленый</option>
                        <option value="#0000FF">Синий</option>
                        <option value="#8B00FF">Фиолетовый</option>
                        <option value="#FFFF00">Желтый</option>
                        <option value="#FFA500">Оранжевый</option>
                        <option value="#808080">Серый</option>
                    </select>
                </div>
            }
        </div>
    );
}

export default ToolBar;
