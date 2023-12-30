import styles from "./ToolBar.module.css"
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import TitleIcon from '@mui/icons-material/Title'; //Category
import ImageIcon from '@mui/icons-material/Image';
import CircleIcon from '@mui/icons-material/Circle';
import SquareIcon from '@mui/icons-material/Square';
import CategoryIcon from '@mui/icons-material/Category';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import { useContext } from "react";
import { PresentationContext } from "../../context/presentation";
import { v4 as uuid} from "uuid"
import { textBlock, circle, square, triangle, image } from "../../const/const";
import { TextBlock as TTextBlock} from "../../types/types";

function ToolBar()
{
    const { presentation, setPresentation, selectedBlockId } = useContext(PresentationContext)
    const currentSlide = presentation.slides[presentation.indexOfCurrentSlide]
    const newPresentation = { ...presentation }
    const block = newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.find((block) => block.id === selectedBlockId)

    const addSlide = () => {
        const newSlide = {
                id: uuid(),
                background: "#FFFFFF",
                data: [],
        }
        newPresentation.slides.splice(presentation.indexOfCurrentSlide + 1, 0, newSlide)
        setPresentation(newPresentation)
    }

    const removeSlide = () => {
        newPresentation.slides = newPresentation.slides.filter(slide => slide.id !== currentSlide.id)
        presentation.indexOfCurrentSlide == presentation.slides.length - 1 && newPresentation.indexOfCurrentSlide--
        setPresentation(newPresentation)
    }

    const addTextBlock = () => {
        newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({ ...textBlock, id: uuid()})
        setPresentation(newPresentation)
    }

    const addGraphicBlock = (type: string) => {
        type === 'circle' && newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({ ...circle, id: uuid()})
        type === 'square' && newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({ ...square, id: uuid()})
        type === 'triangle' && newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({ ...triangle, id: uuid()})
        setPresentation(newPresentation)
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
                newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({ ...image, id: uuid(), data: event.target.result.toString()})
                setPresentation(newPresentation)
            } catch (error) {
                alert("Invalid file!")
            }
        };
        reader.readAsDataURL(file)
    }

    const changeBackgroundOfSlide = (color: string) => {
        newPresentation.slides[newPresentation.indexOfCurrentSlide].background = color
        setPresentation(newPresentation)
    }

    const setUnderlineText = () => {
        if (block!.type === 'text')
        {
            const textBlock = block as TTextBlock
            textBlock.underline = !textBlock.underline
            setPresentation(newPresentation)
        }
    }

    const setBoldText = () => {
        if (block!.type === 'text')
        {
            const textBlock = block as TTextBlock
            textBlock.bold = !textBlock.bold
            setPresentation(newPresentation)
        }
    }

    const setItalicText = () => {
        if (block!.type === 'text')
        {
            const textBlock = block as TTextBlock
            textBlock.italic = !textBlock.italic
            setPresentation(newPresentation)
        }
    }

    return (
        <div className={styles.toolbar}>
            <IconButton><UndoIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton><RedoIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <hr className={styles.separate} />
            <IconButton onClick={() => addSlide()}><AddIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            {presentation.slides?.length == 1
                ? <IconButton disabled><DeleteIcon className={styles.button} sx={{ fontSize: 17}}/></IconButton>
                : <IconButton onClick={() => removeSlide()}><DeleteIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            }
            <label htmlFor="colors" className={styles.text}>Фон</label>
            <select
                className={styles.select}
                id="colors" name="colors"
                value={currentSlide.background}
                onChange={(event) => changeBackgroundOfSlide(event.target.value)}
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
            {block?.type === 'text' &&
                <div>
                    <IconButton onClick={() => { setBoldText() }}><FormatBoldIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <IconButton onClick={() => { setUnderlineText() }}><FormatUnderlinedIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <IconButton onClick={() => { setItalicText() }}><FormatItalicIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                    <label htmlFor="fontFamilies" className={styles.text}>Шрифт</label>
                    <select
                        className={styles.select}
                        id="fontFamilies" name="fontFamilies"
                        value="Inherit"
                        //onchange={}
                    >
                        <option value="Arial">Arial</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Verdana">Verdana</option>
                        <option value="Inherit">Inherit</option>
                        <option value="Times New Roman">Times New Roman</option>
                    </select>
                </div>
            }
            <IconButton>
                <label className={styles.button} htmlFor="image_uploads"><ImageIcon sx={{ fontSize: 17}}/></label>
                <input
                    className={styles.input}
                    id='image_uploads'
                    type='file'
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
