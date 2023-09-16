type Char = {
    value: string,
    fontSize: number,
    fontFamily: string,
    color: string,
}

type Block = {
    id: string,
}

type TextBlock = Block & {
    type: 'text',
    chars: Array<Char>,
}

type ImageBlock = Block & {
    type: 'image',
    data: string,
}

type Figure = {

}

type GraphicBlock = Block & {
    type: 'graphic',
    data: Figure,
}

