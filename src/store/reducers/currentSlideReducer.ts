import {presentation} from "../../const/const"
import {Action, PresentationActions} from "../actions/actions.ts"
import {createHistory} from "../history.ts"

const index = presentation.indexOfCurrentSlide

const history = createHistory<number>(index)

const currentSlideReducer = (state: number = index, action: Action) => {
    console.log(state)
    switch (action.type) {
        case PresentationActions.ADD_PRESENTATION: {
            history.addHistoryItem(action.payload.indexOfCurrentSlide)
            return action.payload.indexOfCurrentSlide
        }
        case PresentationActions.SET_CURRENT_SLIDE: {
            history.addHistoryItem(action.payload.indexOfNewCurrentSlide)
            return action.payload.indexOfNewCurrentSlide
        }
        case PresentationActions.UNDO: {
            const prevState = history.undo()
            if (prevState || prevState === 0) {
                return prevState
            }
            return state
        }
        case PresentationActions.REDO: {
            const nextState = history.redo()
            if (nextState) {
                return nextState
            }
            return state
        }
        default:
            return state
    }
}

export {currentSlideReducer}