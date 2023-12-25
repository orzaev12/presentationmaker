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

function ToolBar()
{
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
                console.log("test")//createAddImageBlockAction(currentSlide.id, event.target.result.toString())
            } catch (error) {
                alert("Invalid file!")
            }
        };
        reader.readAsDataURL(file)
    }

    return (
        <div className={styles.toolbar}>
            <IconButton aria-label="undo" >
                <UndoIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="redo" >
                <RedoIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <hr className={styles.separate} />
            <IconButton aria-label="add" >
                <AddIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="delete" ><DeleteIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            {/* {slides?.length == 1
                ? <IconButton aria-label="delete" disabled><DeleteIcon className={styles.button} sx={{ fontSize: 17}}/></IconButton>
                : <IconButton aria-label="delete" ><DeleteIcon className={styles.button} sx={{ fontSize: 17}} /></IconButton>
            } */}
            <label htmlFor="colors" className={styles.text}>Фон</label>
            <select
                className={styles.select}
                id="colors" name="colors"
                //value={currentSlide.background}
                //onChange={(event) => changeColorOfSlide(event.target.value)}
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
            <IconButton aria-label="title" >
                <TitleIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="image" >
                <label className={styles.button} htmlFor="image_uploads"><ImageIcon sx={{ fontSize: 17}}/></label>
                <input
                    className={styles.input}
                    id='image_uploads'
                    type='file'
                    onChange={(event) => addImageBlock(event)}
                />
            </IconButton>
            <IconButton aria-label="circle" >
                <CircleIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="square" >
                <SquareIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="category" >
                <CategoryIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
        </div>
    );
}

export default ToolBar;
