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

type Block = {
  id: string;
  position: Position;
  size: Size;
};

type TextBlock = Block & {
  type: string;
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
  underline: boolean;
  italic: boolean;
  bold: boolean;
};

type ImageBlock = Block & {
  type: string;
  data: string;
};

type GraphicBlock = Block & {
  type: string;
  background: string;
  data: string;
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
  selectedBlockId?: string | null;
};

type Presentation = {
  name: string;
  indexOfCurrentSlide: number;
  slides: Slide[];
};

export type {
  Position,
  Size,
  TriangleSize,
  ImageBlock,
  Block,
  GraphicBlock,
  TextBlock,
  Operation,
  History,
  Presentation,
  Slide,
};
