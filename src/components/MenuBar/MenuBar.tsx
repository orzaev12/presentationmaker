import styles from "./MenuBar.module.css"
import {useAppActions, useAppSelector} from "../../store/types.ts";
import {Presentation} from "../../types/types.ts";
import html2PDF from 'jspdf-html2canvas';

function MenuBar()
{
    const title = useAppSelector(state => state.title)
    const slides = useAppSelector(state => state.slides)
    const { createAddPresentationAction } = useAppActions()

    function getURL(): string {
        const presentation: Presentation = {
            title: title,
            slides: slides,
            indexOfCurrentSlide: slides.length - 1
        }
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
                createAddPresentationAction(JSON.parse(event.target.result.toString()))
            } catch (error) {
                alert("Invalid file!")
            }
        }
        reader.readAsText(file)
    }

    const toPdf = () => {
        const app = document.getElementById('app')
        html2PDF(app!, {
            jsPDF: {
              format: [1080, 1920],
            },
            imageType: 'image/jpeg',
            output: './pdf/generate.pdf'
          });
    }

    return (
        <div className="menu">
            <button className={styles.button}><label className={styles.text} htmlFor="file_uploads">Загрузить</label></button>
            <button className={styles.button}><a className={styles.text} href={getURL()} download={title}>Сохранить JSON</a></button>
            <button className={styles.button} onClick={() => toPdf()}>PDF</button>
            <input className={styles.input} id="file_uploads" type="file" accept="application/json" onChange={(event) => loadFile(event)}></input>
        </div>
    )
}

export default MenuBar;