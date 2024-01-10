import styles from "./SlideBar.module.css"
import Slide from "../Slide/Slide.tsx"
import classNames from "classnames"
import { useDragAndDropSlide } from "../../hooks/useDndSlide.ts"
import { useAppActions, useAppSelector } from "../../store/types.ts"

function SlideBar() {
  const slides = useAppSelector((state) => state.presentation.slides)
  const indexOfCurrentSlide = useAppSelector(
    (state) => state.presentation.indexOfCurrentSlide,
  )
  const currentSlide = useAppSelector(
    (state) => state.presentation.slides[indexOfCurrentSlide],
  )

  const {
    createSetCurrentSlide,
    createChangeOrderAction,
    createSetSelectedBlockAction,
  } = useAppActions()

  const setCurrentSlide = (index: number) => {
    createSetSelectedBlockAction(currentSlide.id, null)
    createSetCurrentSlide(index)
  }

  const { registerDndItem } = useDragAndDropSlide({
    onOrderChange: (from, to) => {
      createChangeOrderAction(from, to)
      createSetCurrentSlide(to)
    },
  })

  return (
    <div className={styles.slidebar}>
      {slides.map((slide, index) => (
        <div key={index} className={styles.elem}>
          <span className={styles.index}>{index + 1}</span>
          <div
            className={styles.wrapper}
            onMouseDown={() => setCurrentSlide(index)}
          >
            <Slide
              className={
                indexOfCurrentSlide === index
                  ? classNames(styles.slide, styles.current)
                  : classNames(styles.slide, styles.aim)
              }
              slide={slide}
              isWorkSpace={false}
              index={index}
              registerDndItem={registerDndItem}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default SlideBar
