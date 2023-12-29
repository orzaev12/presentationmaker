import { useContext } from "react"
import styles from "./MenuBar.module.css"
import { PresentationContext } from "../../context/presentation"

function MenuBar()
{
    const { presentation, setPresentation } = useContext(PresentationContext)
    function getURL(): string {
        const presentJson = JSON.stringify(presentation)
        const type = "application/json"
        const file = new Blob([presentJson], { type: type })
        return URL.createObjectURL(file)
    }

    function loadFile(event: React.ChangeEvent<HTMLInputElement>) {
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
                setPresentation(JSON.parse(event.target.result.toString()))
            } catch (error) {
                alert("Invalid file!")
            }
        }
        reader.readAsText(file)
        console.log()

    }

    return (
        <div className="menu">
            <button className={styles.button}><a className={styles.text} href={getURL()} download={presentation.name}>Сохранить</a></button>
            <button className={styles.button}><label className={styles.text} htmlFor="file_uploads">Загрузить</label></button>
            <input className={styles.input} id="file_uploads" type="file" accept="application/json" onChange={(event) => loadFile(event)}></input>
        </div>
    )
}

export default MenuBar;