import styles from "./MenuBar.module.css"
import classNames from "classnames";
import {useAppActions, useAppSelector} from "../../store/types.ts";
import {Presentation} from "../../types/types.ts";
import html2PDF from 'jspdf-html2canvas';
import {useEffect} from "react";

function MenuBar()
{
    const title = useAppSelector(state => state.presentation.title)
    const currentSlide = useAppSelector(state => state.presentation.slides[state.presentation.indexOfCurrentSlide])
    const slides = useAppSelector(state => state.presentation.slides)
    const previewWindow = document.getElementById("preview-window")
    const workSpace = (previewWindow != null) ? previewWindow!.children[0] as HTMLElement : null
    const { createAddPresentationAction, createSetSelectedBlockAction } = useAppActions()

    function getURL(): string {
        const presentation: Presentation = {
            title: title,
            slides: slides,
            indexOfCurrentSlide: 0
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
    function getPdf(){
        const pages = []
        for (let i = 0; i < slides.length; i++)
        {
            const doc = document.getElementById(slides[i].id)!
            pages.push(doc)
        }
        html2PDF(pages, {
            jsPDF: {
                format: [1590, 900],
                orientation: 'l',
                unit: 'px',
            },
            html2canvas: {
                scale: 10,
            },
            margin: {
                top: 0,
                left: 0,
                right: -5,
                bottom: -5
            },
            imageType: 'image/jpeg',
            success(pdf) {
                pdf.save(title)
            },
        });
      }

    const previewMode = () => {
        const block = document.getElementById(currentSlide.selectedBlockId!)
        if (block) {
            block!.style.outline = "none"
        }
        createSetSelectedBlockAction(currentSlide.id, null)
        previewWindow?.requestFullscreen()
    }

    useEffect(() => {
        const onFullScreen = () => {
            if (document.fullscreenElement)
            {
                workSpace!.style.transform = `scale(${window.innerWidth / 1660})`
                workSpace!.style.overflow = `hidden`
                previewWindow!.style.pointerEvents = 'none'
            } else {
                workSpace!.style.transform = ''
                previewWindow!.style.pointerEvents = 'auto'
                workSpace!.style.overflow = ``
            }
        }
        document.addEventListener('fullscreenchange', onFullScreen)
        return (() => {
            document.removeEventListener('fullscreenchange', onFullScreen)
        })
    }, [workSpace])

    return (
        <div className="menu">
            <button className={styles.button}><label className={styles.text} htmlFor="file_uploads">Загрузить</label></button>
            <button className={styles.button} onClick={() => createSetSelectedBlockAction(currentSlide.id, null)}><a className={styles.text} href={getURL()} download={title}>Сохранить JSON</a></button>
            <button className={styles.button} onClick={() => getPdf()}><a className={styles.text}>Сохранить PDF</a></button>
            <input className={styles.input} id="file_uploads" type="file" accept="application/json" onChange={(event) => loadFile(event)}></input>
            <button className={classNames(styles.button, styles.text)} onClick={() => previewMode()}>Просмотр</button>
        </div>
    )
}

export default MenuBar;