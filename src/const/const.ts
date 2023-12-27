import { TextBlock, GraphicBlock, ImageBlock, Char } from "../types/types";
import { v4 as uuid } from "uuid"

const textBlock: TextBlock = {
    id: uuid(),
    size: {
        width: 30,
        height: 24,
    },
    position: {
        x: 12,
        y: 90,
    },
    type: "text",
    chars: [{
        value: "T",
        fontSize: 14,
        fontFamily: "inherit",
        color: "#000000"
    },
        {
            value: "e",
            fontSize: 14,
            fontFamily: "inherit",
            color: "#000000"
        },
        {
            value: "x",
            fontSize: 14,
            fontFamily: "inherit",
            color: "#000000"
        },
        {
            value: "t",
            fontSize: 14,
            fontFamily: "inherit",
            color: "#000000"
        },
    ],
}

const circle: GraphicBlock = {
    id: uuid(),
    size: {
        width: 400,
        height: 400,
    },
    position: {
        x: 12,
        y: 10,
    },
    type: 'graphic',
    data: {
        type: "circle",
        size: {
            width: 400,
            height: 400,
        },
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
        x: 12,
        y: 10,
    },
    type: 'graphic',
    data: {
        type: "square",
        size: {
            width: 200,
            height: 200,
        },
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
        x: 12,
        y: 10,
    },
    type: 'graphic',
    data: {
        type: "triangle",
        size: {
            firstSide: 80,
            secondSide: 80,
            thirdSide: 80,
        },
        background: "#00FF00",
    }
}

const image: ImageBlock = {
    id: uuid(),
    size: {
        width: 200,
        height: 40,
    },
    position: {
        x: 12,
        y: 10,
    },
    type: 'image',
    data: '',
}

const char: Char = {
    value: "e",
    fontSize: 14,
    fontFamily: "inherit",
    color: "#000000",
}

export { textBlock, circle, square, triangle, image, char }