import {
    Presentation,
    Slide,
    TextBlock,
    Char,
    Size,
    Position
} from "./types";

const char: Char = {
    value: "A",
    fontSize: 14,
    fontFamily: "inherit",
    color: "#FFFFFF"
}

const char2: Char = {
    value: "b",
    fontSize: 14,
    fontFamily: "inherit",
    color: "#000"
}

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
    chars: [char, char2],
}

const slide: Slide = {
    id: "kdmf1",
    background: "#aaaaaa",
    data: [textBlock],
};

const present: Presentation = {
    name: "Middle examples",
    currentSlide: slide,
    slides: [slide],
  };

export default present;
