import styles from "./Editor.module.css"
import Slide from "../Slide/Slide.tsx"
import SlideBar from "../SlideBar/SlideBar"
import { useAppSelector } from "../../store/types.ts"

function Editor() {
  const currentSlide = useAppSelector(
    (state) =>
      state.presentation.slides[state.presentation.indexOfCurrentSlide],
  )

  return (
    <div className={styles.editor}>
      <SlideBar />
      <div className={styles.workspace} id="preview-window">
        <Slide
          className={styles.slide}
          slide={currentSlide}
          isWorkSpace={true}
        />
      </div>
    </div>
  )
}

export default Editor
