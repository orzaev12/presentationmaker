import { TextBlock, GraphicBlock, ImageBlock } from "../types/types";
import { v4 as uuid } from "uuid"

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
}

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
    type: 'graphic',
    data: {
        type: "circle",
        background: "#00FF00",
    }
}

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
    type: 'graphic',
    data: {
        type: "square",
        background: "#00FF00",
    }
}

const triangle: GraphicBlock = {
    id: uuid(),
    size: {
        width: 160,
        height: 80,
    },
    position: {
        x: 10,
        y: 10,
    },
    type: 'graphic',
    data: {
        type: "triangle",
        background: "#00FF00",
    }
}

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
    type: 'image',
    data: '',
}

export { textBlock, circle, square, triangle, image }