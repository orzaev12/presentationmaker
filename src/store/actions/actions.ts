import {Position, Presentation, Size, Slide} from "../../types/types"

enum PresentationActions {
    ADD_PRESENTATION = 'ADD_PRESENTATION',
    SAVE_PRESENTATION = 'SAVE_PRESENTATION',
    CHANGE_TITLE = 'CHANGE_TITLE',
    ADD_SLIDE = 'ADD_SLIDE',
    SET_CURRENT_SLIDE = 'SET_CURRENT_SLIDE',
    REMOVE_SLIDE = 'REMOVE_SLIDE',
    CHANGE_ORDER = 'CHANGE_ORDER',
    CHANGE_BACKGROUND = 'CHANGE_BACKGROUND',
    SET_SELECTED_BLOCK = 'SET_SELECTED_BLOCK',
    CHANGE_POSITION_OF_BLOCK = 'SET_POSITION_OF_BLOCK',
    ADD_TEXT_BLOCK = 'ADD_TEXT_BLOCK',
    ADD_GRAPHIC_BLOCK = 'ADD_GRAPHIC_BLOCK',
    ADD_IMAGE_BLOCK = 'ADD_IMAGE_BLOCK',
    SET_UNDERLINE_TEXT = 'SET_UNDERLINE_TEXT',
    SET_BOLD_TEXT = 'SET_BOLD_TEXT',
    SET_ITALIC_TEXT = 'SET_ITALIC_TEXT',
    CHANGE_FONT_FAMILY_OF_TEXT = 'CHANGE_FONT_FAMILY_OF_TEXT',
    CHANGE_FONT_SIZE_OF_TEXT = 'CHANGE_FONT_SIZE_OF_TEXT',
    CHANGE_COLOR_OF_BLOCK = 'CHANGE_COLOR_OF_BLOCK',
    CHANGE_SIZE_OF_BLOCK = 'CHANGE_SIZE_OF_BLOCK',
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

type SetSelectedBlockAction = {
    type: PresentationActions.SET_SELECTED_BLOCK,
    payload: {
        slideId: string,
        blockId: string | null,
    },
}

type ChangePositionOfBlockAction = {
    type: PresentationActions.CHANGE_POSITION_OF_BLOCK,
    payload: {
        slideId: string,
        blockId: string,
        newPosition: Position,
    }
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

type SetUnderlineTextAction = {
    type: PresentationActions.SET_UNDERLINE_TEXT,
    payload: {
        slideId: string,
        blockId: string,
    },
}

type SetBoldTextAction = {
    type: PresentationActions.SET_BOLD_TEXT,
    payload: {
        slideId: string,
        blockId: string,
    },
}

type SetItalicTextAction = {
    type: PresentationActions.SET_ITALIC_TEXT,
    payload: {
        slideId: string,
        blockId: string,
    },
}

type ChangeFontFamilyOfTextAction = {
    type: PresentationActions.CHANGE_FONT_FAMILY_OF_TEXT,
    payload: {
        slideId: string,
        blockId: string,
        newFontFamily: string,
    }
}

type ChangeFontSizeOfTextAction = {
    type: PresentationActions.CHANGE_FONT_SIZE_OF_TEXT,
    payload: {
        slideId: string,
        blockId: string,
        newFontSize: number,
    }
}

type ChangeColorOfBlockAction = {
    type: PresentationActions.CHANGE_COLOR_OF_BLOCK,
    payload: {
        slideId: string,
        blockId: string,
        newColor: string,
    }
}

type ChangeSizeOfBlockAction = {
    type: PresentationActions.CHANGE_SIZE_OF_BLOCK,
    payload: {
        slideId: string,
        blockId: string,
        newSize: Size,
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
    SetSelectedBlockAction | ChangePositionOfBlockAction | AddTextBlockAction | AddGraphicBlockAction |
    AddImageBlockAction | SetUnderlineTextAction | SetBoldTextAction | SetItalicTextAction | ChangeFontFamilyOfTextAction |
    ChangeFontSizeOfTextAction | ChangeColorOfBlockAction | ChangeSizeOfBlockAction | UndoAction | RedoAction

export { PresentationActions }