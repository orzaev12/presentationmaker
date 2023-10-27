import styles from "./ToolBar.module.css"
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

function ToolBar()
{
    return (
        <div className={styles.toolbar}>
            <IconButton aria-label="undo">
                <UndoIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="redo" disabled>
                <RedoIcon className={styles.button} sx={{ fontSize: 17}} />
            </IconButton>
        </div>
    );
}

export default ToolBar;
