import {
  Presentation,
  Slide
} from "./types";
import { v4 as uuid} from "uuid"

const slide: Slide = {
  id: uuid(),
  background: "#FFFFFF",
  data: [],
}

const present: Presentation = {
  title: "Презентация без названия",
  indexOfCurrentSlide: 0,
  slides: [slide],
}

export {present}
