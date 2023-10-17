type Char = {
  value: string;
  fontSize: number;
  fontFamily: string;
  color: string;
};

type Position = {
  x: string;
  y: string;
};

type Figure = {
  weight: number;
  height: number;
  thickness: number;
  fillColor: string;
  outlineColor: string;
};

type Block = {
  id: string;
  position: Position;
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

type Slide = {
  id: string;
  backgroundColor: string;
  data?: Array<TextBlock | ImageBlock | GraphicBlock>;
};

type SlidesList = {
  slides?: Array<Slide>;
};

type Presentation = SlidesList & {
  workPlace?: Slide;
};

export type {
  Char,
  Position,
  ImageBlock,
  Figure,
  Block,
  GraphicBlock,
  TextBlock,
  SlidesList,
  Presentation,
  Circle,
  Triangle,
  Square,
  Slide,
};
