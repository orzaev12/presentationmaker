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
    createSetCurrentBlock,
    createAddTextBlockAction,
    createAddGraphicBlockAction,
    createAddImageBlockAction,
    createUndoAction,
    createRedoAction,
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
        createSetCurrentBlock: createSetCurrentBlock,
        createAddTextBlockAction: createAddTextBlockAction,
        createAddGraphicBlockAction: createAddGraphicBlockAction,
        createAddImageBlockAction: createAddImageBlockAction,
        createUndoAction: createUndoAction,
        createRedoAction: createRedoAction,
    }, dispatch)
}

export {
    useAppSelector,
    useAppActions,
}