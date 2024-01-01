import {Position, Presentation, Slide} from "../types/types";
import { PresentationActions } from "./actions/actions.ts";

function createAddPresentationAction(presentation: Presentation) {
    const title = presentation.name
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

function createChangeOrderAction() {
    return {
        type: PresentationActions.CHANGE_ORDER,
        payload: {
            // ???
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

function createChangePositionOfBlockAction(slideId: string, blockId: string, newPosition: Position) {
    return {
        type: PresentationActions.CHANGE_POSITION_OF_BLOCK,
        payload: {
            slideId,
            blockId,
            newPosition,
        }
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
        }
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
    createUndoAction,
    createRedoAction,
}