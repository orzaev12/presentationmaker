import {
  Presentation,
  Slide
} from "./types";

const slide: Slide = {
  id: "kdmf1",
  background: "#aaaaaa",
  data: [],
};

const present: Presentation = {
  name: "",
  currentSlide: slide,
  slides: [slide],
};

export default present;
