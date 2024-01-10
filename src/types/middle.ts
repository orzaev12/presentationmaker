import { Presentation, Slide, TextBlock, Size, Position } from "./types"

const positionTextBlock: Position = {
  x: 12,
  y: 90,
}

const sizeTextBlock: Size = {
  width: 500,
  height: 400,
}

const textBlock: TextBlock = {
  id: "sdfs",
  size: sizeTextBlock,
  position: positionTextBlock,
  type: "text",
  value: "Text",
  fontSize: 13,
  fontFamily: "Roboto,",
  color: "#000000",
  bold: true,
  underline: true,
  italic: true,
}

const slide: Slide = {
  id: "kdmf1",
  background: "#aaaaaa",
  data: [textBlock],
}

const present: Presentation = {
  title: "Middle examples",
  indexOfCurrentSlide: 0,
  slides: [slide],
}

export default present
