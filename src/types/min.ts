import {
  Char,
  Position,
  ImageBlock,
  GraphicBlock,
  TextBlock,
  Presentation,
  Circle,
  Slide,
} from "./type";

const char: Char = {
  value: "A",
  fontSize: 12,
  fontFamily: "sans-serif",
  color: "#000000",
};

const position1: Position = {
  x: "12px",
  y: "12%",
};

const textBlock: TextBlock = {
  position: position1,
  id: "id1",
  type: "text",
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

const graphicBlock: GraphicBlock = {
  position: position1,
  id: "id3",
  type: "graphic",
  data: circleBlock,
};

const slide: Slide = {
  id: "id6",
  backgroundColor: "#FF00FF",
};

const presentation1: Presentation = {};
