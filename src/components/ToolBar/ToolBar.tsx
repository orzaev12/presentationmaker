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
import { useContext, useEffect, useRef } from "react";
import { PresentationContext } from "../../context/presentation";
import { v4 as uuid} from "uuid"
import { textBlock, circle, square, triangle, image } from "../../const/const";

function ToolBar()
{
    const { presentation, setPresentation, selectedBlockId } = useContext(PresentationContext)
    const currentSlide = presentation.slides[presentation.indexOfCurrentSlide]
    const newPresentation = { ...presentation }

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

    return (
        <div className={styles.toolbar}>
            <IconButton aria-label="undo" ><UndoIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton aria-label="redo" ><RedoIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <hr className={styles.separate} />
            <IconButton aria-label="add" onClick={() => addSlide()}><AddIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            {presentation.slides?.length == 1
                ? <IconButton aria-label="delete" disabled><DeleteIcon className={styles.button} sx={{ fontSize: 17}}/></IconButton>
                : <IconButton aria-label="delete" onClick={() => removeSlide()}><DeleteIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
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
            <IconButton aria-label="title" onClick={() => addTextBlock()}><TitleIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <div>
                <IconButton><FormatBoldIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                <IconButton><FormatUnderlinedIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
                <IconButton><FormatItalicIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            </div>
            <IconButton aria-label="image" >
                <label className={styles.button} htmlFor="image_uploads"><ImageIcon sx={{ fontSize: 17}}/></label>
                <input
                    className={styles.input}
                    id='image_uploads'
                    type='file'
                    onChange={(event) => addImageBlock(event)}
                />
            </IconButton>
            <IconButton aria-label="circle" onClick={() => addGraphicBlock("circle")}><CircleIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton aria-label="square" onClick={() => addGraphicBlock("square")}><SquareIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            <IconButton aria-label="category" onClick={() => addGraphicBlock("triangle")}><CategoryIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
        </div>
    );
}

export default ToolBar;
