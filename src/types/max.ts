import {
  Presentation,
  Slide,
  TextBlock,
  ImageBlock,
  Char,
  Size,
  Position,
  GraphicBlock,
  TriangleSize,
  Triangle,
  Circle,
  Square
} from "./types";

const char: Char = {
  value: "A",
  fontSize: 14,
  fontFamily: "inherit",
  color: "#FFFFFF"
}

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

const sizeOfTriangle: TriangleSize = {
  firstSide: 80,
  secondSide: 80,
  thirdSide: 80,
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
  chars: [char],
}

const imageBlock: ImageBlock = {
  id: "segs",
  size: sizeofImageBlock,
  position: positionOfImageBlock,
  type: "image",
  data: "/coconut.svg",
}

const triangle: Triangle = {
  type: "triangle",
  size: sizeOfTriangle,
  background: "#FF0000",
}

const graphicBlock1: GraphicBlock = {
  id: "segssergfc",
  size: sizeOfTriangleBlock,
  position: positionOfTriangle,
  type: "graphic",
  data: triangle,
}

const circle: Circle = {
  type: "circle",
  size: sizeOfCircle,
  background: "#00FF00",
}

const graphicBlock2: GraphicBlock = {
  id: "segsse1rgfc",
  size: sizeOfCircle,
  position: positionOfCircle,
  type: "graphic",
  data: circle,
}

const square: Square = {
  type: "square",
  size: sizeOfSquare,
  background: "#00FFFF",
}

const graphicBlock3: GraphicBlock = {
  id: "segsse1rgesfc",
  size: sizeOfSquare,
  position: positionOfSquare,
  type: "graphic",
  data: square,
}

const slide: Slide = {
  id: "kdmf1",
  background: "#aaaaaa",
  data: [textBlock, imageBlock, graphicBlock1, graphicBlock2, graphicBlock3],
};

const presentation: Presentation = {
  name: "Middle examples",
  currentSlide: slide,
  slides: [slide],
};

export default presentation;
