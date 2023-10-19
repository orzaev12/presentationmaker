import {
  Char,
  Position,
  ImageBlock,
  GraphicBlock,
  TextBlock,
  Presentation,
  Circle,
  Triangle,
  Square,
  Slide,
} from "./type";

const char1: Char = {
  value: "A",
  fontSize: 12,
  fontFamily: "sans-serif",
  color: "#000000",
};

const char2: Char = {
  value: "B",
  fontSize: 22,
  fontFamily: "sans-serif",
  color: "#FFFFFF",
};

const position1: Position = {
  x: "12px",
  y: "12%",
};

const textBlock: TextBlock = {
  position: position1,
  id: "id1",
  type: "text",
  chars: [char1, char2],
};

const imageBlock: ImageBlock = {
  position: position1,
  id: "id1",
  type: "image",
  data: "http://happyFace",
};

const circleBlock: Circle = {
  weight: 12,
  height: 13,
  thickness: 1,
  fillColor: "#000",
  outlineColor: "#000",
  type: "circle",
};

const squareBlock: Square = {
  weight: 12,
  height: 13,
  thickness: 1,
  fillColor: "#000",
  outlineColor: "#000",
  type: "square",
};

const triangleBlock: Triangle = {
  weight: 12,
  height: 13,
  thickness: 1,
  fillColor: "#000",
  outlineColor: "#000",
  type: "triangle",
};

const graphicBlock: GraphicBlock = {
  position: position1,
  id: "id3",
  type: "graphic",
  data: circleBlock,
};

const graphicBlock2: GraphicBlock = {
  position: {
    x: "12px",
    y: "12%",
  },
  id: "id3",
  type: "graphic",
  data: squareBlock,
};

const graphicBlock3: GraphicBlock = {
  position: {
    x: "12px",
    y: "12%",
  },
  id: "id3",
  type: "graphic",
  data: triangleBlock,
};

const slide: Slide = {
  id: "id6",
  data: [textBlock, imageBlock, graphicBlock, graphicBlock2, graphicBlock3],
  backgroundColor: "#FF00FF",
};

const slide2: Slide = {
  id: "id8",
  data: [imageBlock, graphicBlock],
  backgroundColor: "00FF00",
};

const presentation1: Presentation = {
  slides: [slide, slide2],
  workPlace: slide,
};
