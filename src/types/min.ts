import {
  Presentation,
  Slide
} from "./types";

const slide: Slide = {
  id: "kdmf1",
  background: "#aaaaaa",
  data: [],
};

const presentation: Presentation = {
  name: "",
  currentSlide: slide,
  slides: [slide],
};

export default presentation;
