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
  /* thickness: number;
  fillColor: string;
  outlineColor: string; */
};

type Block = {
  id: string;
  position: Position;
  size: Size;
};

type Circle = Figure & {
  size: Size;
  type: "circle";
};
type Square = Figure & {
  size: Size;
  type: "square";
};
type Triangle = Figure & {
  size: TriangleSize;
  type: "triangle";
};

type TextBlock = Block & {
  type: "text";
  chars?: Array<Char>;
};

type ImageBlock = Block & {
  type: "image";
  data: string;
};

type GraphicBlock = Block & {
  type: "graphic";
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
  currentSlide: Slide;
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
