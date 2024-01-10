import {
  Presentation,
  Slide,
  TextBlock,
  ImageBlock,
  Size,
  Position,
  GraphicBlock,
} from "./types"

const positionOfTextBlock: Position = {
  x: 12,
  y: 90,
}

const positionOfImageBlock: Position = {
  x: 90,
  y: 50,
}

const positionOfTriangle: Position = {
  x: 12,
  y: 10,
}

const positionOfCircle: Position = {
  x: 12,
  y: 10,
}

const positionOfSquare: Position = {
  x: 12,
  y: 10,
}

const sizeOfTriangleBlock: Size = {
  width: 160,
  height: 40,
}

const sizeOfCircle: Size = {
  width: 400,
  height: 400,
}

const sizeOfSquare: Size = {
  width: 200,
  height: 200,
}

const sizeOfTextBlock: Size = {
  width: 80,
  height: 40,
}

const sizeofImageBlock: Size = {
  width: 200,
  height: 200,
}

const textBlock: TextBlock = {
  id: "sdfs",
  size: sizeOfTextBlock,
  position: positionOfTextBlock,
  type: "text",
  value: "Text",
  fontSize: 13,
  fontFamily: "Roboto,",
  color: "#000000",
  bold: true,
  underline: true,
  italic: true,
}

const imageBlock: ImageBlock = {
  id: "segs",
  size: sizeofImageBlock,
  position: positionOfImageBlock,
  type: "image",
  data: "/coconut.svg",
}

const graphicBlock1: GraphicBlock = {
  type: "graphic",
  background: "#000000",
  id: "segssergfc",
  size: sizeOfTriangleBlock,
  position: positionOfTriangle,
  data: "triangle",
}

const graphicBlock2: GraphicBlock = {
  id: "segsse1rgfc",
  background: "#000000",
  size: sizeOfCircle,
  position: positionOfCircle,
  type: "graphic",
  data: "circle",
}

const graphicBlock3: GraphicBlock = {
  id: "segsse1rgesfc",
  background: "#000000",
  size: sizeOfSquare,
  position: positionOfSquare,
  type: "graphic",
  data: "square",
}

const slide: Slide = {
  id: "kdmf1",
  background: "#aaaaaa",
  data: [textBlock, imageBlock, graphicBlock1, graphicBlock2, graphicBlock3],
}

const slide2: Slide = {
  id: "kdmfs1",
  background: "#F5A133",
  data: [graphicBlock2, graphicBlock3],
}

const slide3: Slide = {
  id: "kds1",
  background: "#FF55FF",
  data: [],
}

const present: Presentation = {
  title: "Max examples",
  indexOfCurrentSlide: 0,
  slides: [slide, slide2, slide3],
}

export default present
