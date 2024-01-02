import { TypedUseSelectorHook, useSelector } from "react-redux"
import { rootReducer } from "./reducers/rootReducer.ts"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import {
    createAddPresentationAction,
    createSavePresentationAction,
    createAddSlideAction,
    createSetCurrentSlide,
    createChangeTitleAction,
    createRemoveSlideAction,
    createChangeBackgroundAction,
    createChangeOrderAction,
    createSetSelectedBlockAction,
    createAddTextBlockAction,
    createAddGraphicBlockAction,
    createAddImageBlockAction,
    createUndoAction,
    createRedoAction,
    createChangePositionOfBlockAction,
    createSetUnderlineTextAction,
    createSetBoldTextAction,
    createSetItalicTextAction,
    createChangeFontFamilyOfTextAction,
    createChangeFontSizeOfTextAction,
    createChangeColorOfBlockAction,
    createDeleteBlockAction,
} from "./actionCreators.ts"

type RootState = ReturnType<typeof rootReducer>

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

const useAppActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators({
        createAddPresentationAction: createAddPresentationAction,
        createSavePresentationAction: createSavePresentationAction,
        createChangeTitleAction: createChangeTitleAction,
        createAddSlideAction: createAddSlideAction,
        createRemoveSlideAction: createRemoveSlideAction,
        createSetCurrentSlide: createSetCurrentSlide,
        createChangeOrderAction: createChangeOrderAction,
        createChangeBackgroundAction: createChangeBackgroundAction,
        createSetSelectedBlockAction: createSetSelectedBlockAction,
        createChangePositionOfBlockAction: createChangePositionOfBlockAction,
        createAddTextBlockAction: createAddTextBlockAction,
        createAddGraphicBlockAction: createAddGraphicBlockAction,
        createAddImageBlockAction: createAddImageBlockAction,
        createSetUnderlineTextAction: createSetUnderlineTextAction,
        createSetBoldTextAction: createSetBoldTextAction,
        createSetItalicTextAction: createSetItalicTextAction,
        createChangeFontFamilyOfTextAction: createChangeFontFamilyOfTextAction,
        createChangeFontSizeOfTextAction: createChangeFontSizeOfTextAction,
        createChangeColorOfBlockAction: createChangeColorOfBlockAction,
        createUndoAction: createUndoAction,
        createRedoAction: createRedoAction,
        createDeleteBlockAction: createDeleteBlockAction,
    }, dispatch)
}

export {
    useAppSelector,
    useAppActions,
}