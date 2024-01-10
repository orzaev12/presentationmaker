import { useContext } from "react"
import { PresentationContext } from "../context/presentation"
import { v4 as uuid } from "uuid"
import { circle, triangle, square, textBlock, image } from "./const"

const { presentation, setPresentation } = useContext(PresentationContext)
const newPresentation = { ...presentation }
const currentSlide = presentation.slides[presentation.indexOfCurrentSlide]

const addSlide = () => {
  const newSlide = {
    id: uuid(),
    background: "#FFFFFF",
    data: [],
  }
  newPresentation.slides.splice(
    presentation.indexOfCurrentSlide + 1,
    0,
    newSlide,
  )
  setPresentation(newPresentation)
}

const removeSlide = () => {
  newPresentation.slides = newPresentation.slides.filter(
    (slide) => slide.id !== currentSlide.id,
  )
  presentation.indexOfCurrentSlide == presentation.slides.length - 1 &&
    newPresentation.indexOfCurrentSlide--
  setPresentation(newPresentation)
}

const addTextBlock = () => {
  newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({
    ...textBlock,
    id: uuid(),
  })
  setPresentation(newPresentation)
}

const addGraphicBlock = (type: string) => {
  type === "circle" &&
    newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({
      ...circle,
      id: uuid(),
    })
  type === "square" &&
    newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({
      ...square,
      id: uuid(),
    })
  type === "triangle" &&
    newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({
      ...triangle,
      id: uuid(),
    })
  setPresentation(newPresentation)
}

const addImageBlock = (event: React.ChangeEvent<HTMLInputElement>) => {
  if (!event.target.files) {
    return
  }
  const file = event.target.files[0]
  const reader = new FileReader()
  reader.onload = (event) => {
    if (!event.target?.result) {
      return
    }
    try {
      newPresentation.slides[newPresentation.indexOfCurrentSlide].data?.push({
        ...image,
        id: uuid(),
        data: event.target.result.toString(),
      })
      setPresentation(newPresentation)
    } catch (error) {
      alert("Invalid file!")
    }
  }
  reader.readAsDataURL(file)
}

const changeBackgroundOfSlide = (color: string) => {
  newPresentation.slides[newPresentation.indexOfCurrentSlide].background = color
  setPresentation(newPresentation)
}

export {
  addGraphicBlock,
  addImageBlock,
  addSlide,
  addTextBlock,
  removeSlide,
  changeBackgroundOfSlide,
}
