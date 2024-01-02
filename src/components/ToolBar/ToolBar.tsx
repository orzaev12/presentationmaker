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
import { TextBlock as TTextBlock, GraphicBlock as TGraphicBlock} from "../../types/types";
import {useAppActions, useAppSelector} from "../../store/types.ts";

function ToolBar()
{
    const { createSetCurrentSlide, createAddSlideAction, createRemoveSlideAction, createChangeBackgroundAction,
        createAddTextBlockAction, createUndoAction, createRedoAction, createAddGraphicBlockAction,createAddImageBlockAction,
        createSetUnderlineTextAction, createSetBoldTextAction, createSetItalicTextAction, createChangeFontFamilyOfTextAction,
        createChangeFontSizeOfTextAction, createChangeColorOfBlockAction, createDeleteBlockAction,
    } = useAppActions()
    const slides = useAppSelector(state => state.slides)
    const indexOfCurrentSlide = useAppSelector(state => state.indexOfCurrentSlide)
    const currentSlide = useAppSelector(state => state.slides[indexOfCurrentSlide])
    const selectedBlockId = useAppSelector(state => state.slides[indexOfCurrentSlide].selectedBlockId)
    const selectedBlock = currentSlide.data?.find((block) => block.id === selectedBlockId)

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

    const removeBlock = () => {
        if (selectedBlock) {
            createDeleteBlockAction(currentSlide.id, selectedBlock.id)
        }
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
    }

    const setBoldText = () => {
        if (selectedBlock?.type === 'text') {
            createSetBoldTextAction(currentSlide.id, selectedBlock.id)
        }
    }

    const setItalicText = () => {
        if (selectedBlock?.type === 'text') {
            createSetItalicTextAction(currentSlide.id, selectedBlock.id)
        }
    }

    const changeFontFamilyOfText = (fontFamily: string) => {
        createChangeFontFamilyOfTextAction(currentSlide.id, selectedBlock!.id, fontFamily)
    }

    const changeFontSizeOfText = (fontSize: string) => {
        createChangeFontSizeOfTextAction(currentSlide.id, selectedBlock!.id, parseInt(fontSize))
    }

    const changeColorOfBlock = (color: string) => {
        createChangeColorOfBlockAction(currentSlide.id, selectedBlock!.id, color)
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
            <span className={styles.text}>Фон</span>
            <select
                className={styles.select}
                name="colors"
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
            {selectedBlock?.type === 'text' &&
                <div className={styles.flex}>
                    <IconButton onClick={() => { setBoldText() }}><FormatBoldIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <IconButton onClick={() => { setUnderlineText() }}><FormatUnderlinedIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <IconButton onClick={() => { setItalicText() }}><FormatItalicIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <span className={styles.text}>Шрифт</span>
                    <select
                        className={styles.select}
                        name="fontFamilies"
                        value={(selectedBlock as TTextBlock).fontFamily}
                        onChange={(event) => changeFontFamilyOfText(event.target.value)}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Inherit">Inherit</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                    <span className={styles.text}>Размер</span>
                    <input name={'size'} className={styles.input} type="number" value={(selectedBlock as TTextBlock).fontSize} onChange={(event) => changeFontSizeOfText(event.target.value)} />
                </div>
            }
            {(selectedBlock?.type === 'graphic' || selectedBlock?.type === 'text') &&
                <div className={styles.flex}>
                    <span className={styles.text}>{selectedBlock?.type === 'graphic' ? 'Цвет фигуры' : 'Цвет шрифта'}</span>
                    <select
                        className={styles.select}
                        name="graphicColors"
                        value={selectedBlock.type === 'graphic' ? (selectedBlock as TGraphicBlock).background : (selectedBlock as TTextBlock).color}
                        onChange={(event) => changeColorOfBlock(event.target.value)}
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
            {(selectedBlock?.type ) &&
                <IconButton onClick={() => removeBlock()}><DeleteIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            }
            <IconButton onClick={() => addTextBlock()}><TitleIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
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
        </div>
    );
}

export default ToolBar;
