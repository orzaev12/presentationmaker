import { Position, Presentation, Size, Slide } from "../types/types"
import { PresentationActions } from "./actions/actions.ts"

function createAddPresentationAction(presentation: Presentation) {
  const title = presentation.title
  const slides = presentation.slides
  const indexOfCurrentSlide = presentation.indexOfCurrentSlide

  return {
    type: PresentationActions.ADD_PRESENTATION,
    payload: {
      title,
      slides,
      indexOfCurrentSlide,
    },
  }
}

function createSavePresentationAction(presentation: Presentation) {
  return {
    type: PresentationActions.SAVE_PRESENTATION,
    payload: {
      presentation,
    },
  }
}

function createChangeTitleAction(newTitle: string) {
  return {
    type: PresentationActions.CHANGE_TITLE,
    payload: {
      newTitle,
    },
  }
}

function createAddSlideAction(indexOfCurrentSlide: number) {
  return {
    type: PresentationActions.ADD_SLIDE,
    payload: {
      indexOfCurrentSlide,
    },
  }
}

function createSetCurrentSlide(indexOfNewCurrentSlide: number) {
  return {
    type: PresentationActions.SET_CURRENT_SLIDE,
    payload: {
      indexOfNewCurrentSlide,
    },
  }
}

function createRemoveSlideAction(slideId: string) {
  return {
    type: PresentationActions.REMOVE_SLIDE,
    payload: {
      slideId,
    },
  }
}

function createChangeOrderAction(from: number, to: number) {
  return {
    type: PresentationActions.CHANGE_ORDER,
    payload: {
      from,
      to,
    },
  }
}

function createChangeBackgroundAction(slide: Slide, newBackground: string) {
  return {
    type: PresentationActions.CHANGE_BACKGROUND,
    payload: {
      slide,
      newBackground,
    },
  }
}

function createSetSelectedBlockAction(slideId: string, blockId: string | null) {
  return {
    type: PresentationActions.SET_SELECTED_BLOCK,
    payload: {
      slideId,
      blockId,
    },
  }
}

function createChangePositionOfBlockAction(
  slideId: string,
  blockId: string,
  newPosition: Position,
) {
  return {
    type: PresentationActions.CHANGE_POSITION_OF_BLOCK,
    payload: {
      slideId,
      blockId,
      newPosition,
    },
  }
}

function createAddTextBlockAction(slideId: string) {
  return {
    type: PresentationActions.ADD_TEXT_BLOCK,
    payload: {
      slideId,
    },
  }
}

function createAddGraphicBlockAction(slideId: string, type: string) {
  return {
    type: PresentationActions.ADD_GRAPHIC_BLOCK,
    payload: {
      slideId,
      type,
    },
  }
}

function createAddImageBlockAction(slideId: string, data: string) {
  return {
    type: PresentationActions.ADD_IMAGE_BLOCK,
    payload: {
      slideId,
      data,
    },
  }
}

function createSetUnderlineTextAction(slideId: string, blockId: string) {
  return {
    type: PresentationActions.SET_UNDERLINE_TEXT,
    payload: {
      slideId,
      blockId,
    },
  }
}

function createSetBoldTextAction(slideId: string, blockId: string) {
  return {
    type: PresentationActions.SET_BOLD_TEXT,
    payload: {
      slideId,
      blockId,
    },
  }
}

function createSetItalicTextAction(slideId: string, blockId: string) {
  return {
    type: PresentationActions.SET_ITALIC_TEXT,
    payload: {
      slideId,
      blockId,
    },
  }
}

function createChangeFontFamilyOfTextAction(
  slideId: string,
  blockId: string,
  newFontFamily: string,
) {
  return {
    type: PresentationActions.CHANGE_FONT_FAMILY_OF_TEXT,
    payload: {
      slideId,
      blockId,
      newFontFamily,
    },
  }
}

function createChangeFontSizeOfTextAction(
  slideId: string,
  blockId: string,
  newFontSize: number,
) {
  return {
    type: PresentationActions.CHANGE_FONT_SIZE_OF_TEXT,
    payload: {
      slideId,
      blockId,
      newFontSize,
    },
  }
}

function createChangeColorOfBlockAction(
  slideId: string,
  blockId: string,
  newColor: string,
) {
  return {
    type: PresentationActions.CHANGE_COLOR_OF_BLOCK,
    payload: {
      slideId,
      blockId,
      newColor,
    },
  }
}

function createChangeSizeOfBlockAction(
  slideId: string,
  blockId: string,
  newSize: Size,
) {
  return {
    type: PresentationActions.CHANGE_SIZE_OF_BLOCK,
    payload: {
      slideId,
      blockId,
      newSize,
    },
  }
}

function createAddCharacterAction(
  slideId: string,
  blockId: string,
  char: string,
) {
  return {
    type: PresentationActions.ADD_CHARACTER,
    payload: {
      slideId,
      blockId,
      char,
    },
  }
}

function createDeleteCharacterAction(slideId: string, blockId: string) {
  return {
    type: PresentationActions.DELETE_CHARACTER,
    payload: {
      slideId,
      blockId,
    },
  }
}

function createUndoAction() {
  return {
    type: PresentationActions.UNDO,
    payload: {},
  }
}

function createRedoAction() {
  return {
    type: PresentationActions.REDO,
    payload: {},
  }
}

function createDeleteBlockAction(slideId: string, blockId: string) {
  return {
    type: PresentationActions.DELETE_BLOCK,
    payload: {
      slideId,
      blockId,
    },
  }
}

export {
  createAddPresentationAction,
  createSavePresentationAction,
  createChangeTitleAction,
  createAddSlideAction,
  createRemoveSlideAction,
  createSetCurrentSlide,
  createChangeOrderAction,
  createChangeBackgroundAction,
  createSetSelectedBlockAction,
  createChangePositionOfBlockAction,
  createAddTextBlockAction,
  createAddGraphicBlockAction,
  createAddImageBlockAction,
  createSetUnderlineTextAction,
  createSetBoldTextAction,
  createSetItalicTextAction,
  createChangeFontFamilyOfTextAction,
  createChangeFontSizeOfTextAction,
  createChangeColorOfBlockAction,
  createChangeSizeOfBlockAction,
  createAddCharacterAction,
  createDeleteCharacterAction,
  createUndoAction,
  createRedoAction,
  createDeleteBlockAction,
}
