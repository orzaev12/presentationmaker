import "./ToolBar.css";
import IconButton from '@mui/material/IconButton';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';

function ToolBar()
{
    return (
        <div className="tool-bar">
            <IconButton aria-label="undo">
                <UndoIcon sx={{ fontSize: 17}} />
            </IconButton>
            <IconButton aria-label="redo" disabled>
                <RedoIcon sx={{ fontSize: 17}} />
            </IconButton>
        </div>
    );
}

export default ToolBar;
