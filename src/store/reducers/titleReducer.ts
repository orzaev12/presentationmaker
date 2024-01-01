import { presentation } from "../../const/const.ts"
import { Action, PresentationActions } from "../actions/actions.ts"
import { createHistory } from "../history.ts"

const title = presentation.title ? presentation.title : 'Презентация без названия'

const history = createHistory<string>(title)

const titleReducer = (state: string = title, action: Action) => {
    switch (action.type) {
        case PresentationActions.ADD_PRESENTATION: {
            history.addHistoryItem(action.payload.title)
            return action.payload.title
        }
        case PresentationActions.CHANGE_TITLE: {
            history.addHistoryItem(action.payload.newTitle)
            return action.payload.newTitle
        }
        case PresentationActions.UNDO: {
            const prevState = history.undo()
            if (prevState) {
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

export { titleReducer }