import { Action, PresentationActions } from "../actions/actions.ts";
import { presentation } from "../../const/const.ts";
import { createHistory } from "../history.ts";
import { GraphicBlock, Presentation, TextBlock } from "../../types/types.ts";
import { v4 as uuid } from "uuid";
import {
  image,
  textBlock,
  circle,
  triangle,
  square,
} from "../../const/const.ts";

const history = createHistory<Presentation>(presentation);

const presentationReducer = (
  state: Presentation = presentation,
  action: Action,
) => {
  switch (action.type) {
    case PresentationActions.ADD_PRESENTATION: {
      const newState = {
        title: action.payload.title,
        slides: action.payload.slides,
        indexOfCurrentSlide: action.payload.indexOfCurrentSlide,
      };
      history.clear();
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.ADD_SLIDE: {
      const newSlides = [...state.slides];
      newSlides.splice(action.payload.indexOfCurrentSlide + 1, 0, {
        id: uuid(),
        background: "#FFFFFF",
        data: [],
      });
      const newState = {
        ...state,
        slides: newSlides,
        indexOfCurrentSlide: state.indexOfCurrentSlide + 1,
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.REMOVE_SLIDE: {
      const newState = {
        ...state,
        slides: state.slides.filter(
          (item) => item.id != action.payload.slideId,
        ),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.CHANGE_ORDER:
      const newState: Presentation = JSON.parse(JSON.stringify(state));
      const removed = newState.slides.splice(action.payload.from, 1);
      newState.slides.splice(action.payload.to, 0, removed[0]);
      history.addHistoryItem(newState);
      return newState;
    case PresentationActions.CHANGE_BACKGROUND: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slide.id) {
            return {
              ...slide,
              background: action.payload.newBackground,
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.ADD_TEXT_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.concat({
                ...textBlock,
                id: uuid(),
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.ADD_GRAPHIC_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (
            slide.id === action.payload.slideId &&
            action.payload.type === "circle"
          ) {
            return {
              ...slide,
              data: slide.data!.concat({
                ...circle,
                id: uuid(),
              }),
            };
          }
          if (
            slide.id === action.payload.slideId &&
            action.payload.type === "square"
          ) {
            return {
              ...slide,
              data: slide.data!.concat({
                ...square,
                id: uuid(),
              }),
            };
          }
          if (
            slide.id === action.payload.slideId &&
            action.payload.type === "triangle"
          ) {
            return {
              ...slide,
              data: slide.data!.concat({
                ...triangle,
                id: uuid(),
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.ADD_IMAGE_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.concat({
                ...image,
                id: uuid(),
                data: action.payload.data,
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.DELETE_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.filter(
                (block) => block.id != action.payload.blockId,
              ),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.SET_SELECTED_BLOCK: {
      return {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return { ...slide, selectedBlockId: action.payload.blockId };
          }
          return slide;
        }),
      };
    }
    case PresentationActions.CHANGE_POSITION_OF_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  return { ...block, position: action.payload.newPosition };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.SET_UNDERLINE_TEXT: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  block = block as TextBlock;
                  return { ...block, underline: !block.underline };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.SET_BOLD_TEXT: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  block = block as TextBlock;
                  return { ...block, bold: !block.bold };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.SET_ITALIC_TEXT: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  block = block as TextBlock;
                  return { ...block, italic: !block.italic };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.CHANGE_FONT_FAMILY_OF_TEXT: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  block = block as TextBlock;
                  return { ...block, fontFamily: action.payload.newFontFamily };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.CHANGE_FONT_SIZE_OF_TEXT: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  block = block as TextBlock;
                  return { ...block, fontSize: action.payload.newFontSize };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.CHANGE_COLOR_OF_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  if (block.type === "text") {
                    const textBlock = block as TextBlock;
                    return { ...textBlock, color: action.payload.newColor };
                  } else if (block.type === "graphic") {
                    const graphicBlock = block as GraphicBlock;
                    return {
                      ...graphicBlock,
                      background: action.payload.newColor,
                    };
                  }
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.CHANGE_SIZE_OF_BLOCK: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  return { ...block, size: action.payload.newSize };
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.ADD_CHARACTER: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  if (block.type === "text") {
                    const textBlock = block as TextBlock;
                    return {
                      ...textBlock,
                      value: textBlock.value.concat(action.payload.char),
                    };
                  }
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.DELETE_CHARACTER: {
      const newState = {
        ...state,
        slides: state.slides.map((slide) => {
          if (slide.id === action.payload.slideId) {
            return {
              ...slide,
              data: slide.data!.map((block) => {
                if (block.id === action.payload.blockId) {
                  if (block.type === "text") {
                    const textBlock = block as TextBlock;
                    return {
                      ...textBlock,
                      value: textBlock.value.slice(0, -1),
                    };
                  }
                }
                return block;
              }),
            };
          }
          return slide;
        }),
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.CHANGE_TITLE: {
      const newState = {
        ...state,
        title: action.payload.newTitle,
      };
      history.addHistoryItem(newState);
      return newState;
    }
    case PresentationActions.SET_CURRENT_SLIDE: {
      return {
        ...state,
        indexOfCurrentSlide: action.payload.indexOfNewCurrentSlide,
      };
    }
    case PresentationActions.UNDO: {
      const prevState = history.undo();
      if (prevState) {
        return prevState;
      }
      return state;
    }
    case PresentationActions.REDO: {
      const nextState = history.redo();
      if (nextState) {
        return nextState;
      }
      return state;
    }
    default:
      return state;
  }
};

export { presentationReducer };
