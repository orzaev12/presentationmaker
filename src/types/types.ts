type Char = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
};

type Position = {
  x: number;
  y: number;
};

type Size = {
  width: number;
  height: number;
}

type TriangleSize = {
  firstSide: number;
  secondSide: number;
  thirdSide: number;
}

type Figure = {
  background: string;
};

type Block = {
  id: string;
  position: Position;
  size: Size;
};

type Circle = Figure & {
  type: "circle";
};
type Square = Figure & {
  type: "square";
};
type Triangle = Figure & {
  type: "triangle";
};

type TextBlock = Block & {
  type: string;
  underline: boolean;
  italic: boolean;
  bold: boolean;
  chars?: Array<Char>;
};

type ImageBlock = Block & {
  type: string;
  data: string;
};

type GraphicBlock = Block & {
  type: string;
  data: Circle | Square | Triangle;
};

type Operation = {
  id: string;
}

type History = {
  operations: Operation[];
  undoOperations: Operation[];
}

type Slide = {
  id: string;
  background: string;
  data: Array<TextBlock | ImageBlock | GraphicBlock> | null;
};

type Presentation = {
  name: string;
  indexOfCurrentSlide: number;
  slides: Slide[];
};

export type {
  Char,
  Position,
  Size,
  TriangleSize,
  ImageBlock,
  Figure,
  Block,
  GraphicBlock,
  TextBlock,
  Operation,
  History,
  Presentation,
  Circle,
  Triangle,
  Square,
  Slide,
};
