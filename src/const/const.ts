import {
  TextBlock,
  GraphicBlock,
  ImageBlock,
  Slide,
  Presentation,
} from "../types/types";
import { v4 as uuid } from "uuid";

const textBlock: TextBlock = {
  id: uuid(),
  size: {
    width: 30,
    height: 24,
  },
  position: {
    x: 10,
    y: 10,
  },
  type: "text",
  value: "Text",
  fontSize: 14,
  fontFamily: "Inherit",
  color: "#000000",
  underline: false,
  italic: false,
  bold: false,
};

const circle: GraphicBlock = {
  id: uuid(),
  size: {
    width: 400,
    height: 400,
  },
  position: {
    x: 10,
    y: 10,
  },
  type: "graphic",
  data: "circle",
  background: "#808080",
};

const square: GraphicBlock = {
  id: uuid(),
  size: {
    width: 200,
    height: 200,
  },
  position: {
    x: 10,
    y: 10,
  },
  type: "graphic",
  data: "square",
  background: "#808080",
};

const triangle: GraphicBlock = {
  id: uuid(),
  type: "graphic",
  size: {
    width: 160,
    height: 80,
  },
  position: {
    x: 10,
    y: 10,
  },
  data: "triangle",
  background: "#808080",
};

const image: ImageBlock = {
  id: uuid(),
  size: {
    width: 500,
    height: 500,
  },
  position: {
    x: 10,
    y: 10,
  },
  type: "image",
  data: "",
};

const slide: Slide = {
  id: uuid(),
  background: "#FFFFFF",
  data: [],
};

const presentation: Presentation = {
  title: "Презентация без названия",
  indexOfCurrentSlide: 0,
  slides: [slide],
};

export { textBlock, circle, square, triangle, image, presentation };
