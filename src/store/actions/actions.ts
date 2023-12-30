import { Presentation, Slide } from "../../types/types"

enum PresentationActions {
    ADD_PRESENTATION = 'ADD_PRESENTATION',
    SAVE_PRESENTATION = 'SAVE_PRESENTATION',
    CHANGE_TITLE = 'CHANGE_TITLE',
    ADD_SLIDE = 'ADD_SLIDE',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
    REMOVE_SLIDE = 'REMOVE_SLIDE',
    CHANGE_ORDER = 'CHANGE_ORDER',
    CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
    SET_CURRENT_BLOCK = 'SET_CURRENT_BLOCK',
    ADD_TEXT_BLOCK = 'ADD_TEXT_BLOCK',
    ADD_GRAPHIC_BLOCK = 'ADD_GRAPHIC_BLOCK',
    ADD_IMAGE_BLOCK = 'ADD_IMAGE_BLOCK',
    UNDO = 'UNDO',
    REDO = 'REDO',
}

type AddPresentationAction = {
    type: PresentationActions.ADD_PRESENTATION,
    payload: {
        title: string,
        slides: Slide[],
        indexOfCurrentSlide: number,
    },
}

type SavePresentationAction = {
    type: PresentationActions.SAVE_PRESENTATION,
    payload: {
        presentation: Presentation,
    },
}

type ChangePresentationTitleAction = {
    type: PresentationActions.CHANGE_TITLE,
    payload: {
        newTitle: string,
    },
}

type AddSlideAction = {
    type: PresentationActions.ADD_SLIDE,
    payload: {
        indexOfCurrentSlide: number,
    },
}

type SetCurrentSlide = {
    type: PresentationActions.SET_CURRENT_SLIDE,
    payload: {
        indexOfNewCurrentSlide: number,
    },
}

type RemoveSlideAction = {
    type: PresentationActions.REMOVE_SLIDE,
    payload: {
        slideId: string,
    },
}

type ChangeOrderAction = {
    type: PresentationActions.CHANGE_ORDER,
    payload: {
        // ???
    },
}

type ChangeBackgroundAction = {
    type: PresentationActions.CHANGE_BACKGROUND,
    payload: {
        slide: Slide,
        newBackground: string,
    },
}

type SetCurrentBlockAction = {
    type: PresentationActions.SET_CURRENT_BLOCK,
    payload: {
        slide: Slide,
        blockId: string,
    },
}

type AddTextBlockAction = {
    type: PresentationActions.ADD_TEXT_BLOCK,
    payload: {
        slideId: string,
    },
}

type AddGraphicBlockAction = {
    type: PresentationActions.ADD_GRAPHIC_BLOCK,
    payload: {
        slideId: string,
        type: string,
    }
}

type AddImageBlockAction = {
    type: PresentationActions.ADD_IMAGE_BLOCK,
    payload: {
        slideId: string,
        data: string,
    }
}

type UndoAction = {
    type: PresentationActions.UNDO,
    payload: {},
}

type RedoAction = {
    type: PresentationActions.REDO,
    payload: {},
}


export type Action = AddPresentationAction | SavePresentationAction |ChangePresentationTitleAction |
    AddSlideAction | SetCurrentSlide | RemoveSlideAction | ChangeOrderAction | ChangeBackgroundAction |
    SetCurrentBlockAction | AddTextBlockAction | AddGraphicBlockAction | AddImageBlockAction| UndoAction |
    RedoAction

export { PresentationActions }