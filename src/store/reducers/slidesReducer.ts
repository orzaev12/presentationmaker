import {Action, PresentationActions} from "../actions/actions.ts"
import {presentation} from "../../const/const.ts"
import {createHistory} from "../history.ts"
import {Slide} from "../../types/types.ts"
import {v4 as uuid} from "uuid"

const history = createHistory<Slide[]>(presentation.slides)

const slidesReducer = (state = presentation.slides, action: Action) => {
    switch (action.type) {
        case PresentationActions.ADD_PRESENTATION: {
            history.addHistoryItem(action.payload.slides)
            return action.payload.slides
        }
        case PresentationActions.ADD_SLIDE: {
            state.splice(action.payload.indexOfCurrentSlide + 1, 0, {id: uuid(), background: '#FFFFFF', data: []})
            //const newState = state.concat({id: uuid(), background: '#FFFFFF', data: []})
            history.addHistoryItem(state)
            return state
        }
        case PresentationActions.REMOVE_SLIDE: {
            const newState = state.filter(item => item.id != action.payload.slideId)
            history.addHistoryItem(newState)
            return newState
        }
        case PresentationActions.CHANGE_ORDER:
            return state//???
        case PresentationActions.CHANGE_BACKGROUND: {
            const newState = state.map(slide => {
                if (slide.id === action.payload.slide.id) {
                    return {
                        ...slide,
                        background: action.payload.newBackground,
                    }
                }
                return slide
            })
            history.addHistoryItem(newState)
            return newState
        }
        case PresentationActions.ADD_TEXT_BLOCK: {
            const newState = state.map(slide => {
                if (slide.id === action.payload.slideId)
                {
                    return {
                        ...slide,
                        data: slide.data.concat({
                            id: uuid(),
                            size: {
                                width: 80,
                                height: 40,
                            },
                            position: {
                                x: 12,
                                y: 90,
                            },
                            type: "text",
                            chars: [{
                                value: "T",
                                fontSize: 14,
                                fontFamily: "inherit",
                                color: "#000000"
                            },
                                {
                                    value: "e",
                                    fontSize: 14,
                                    fontFamily: "inherit",
                                    color: "#000000"
                                },
                                {
                                    value: "x",
                                    fontSize: 14,
                                    fontFamily: "inherit",
                                    color: "#000000"
                                },
                                {
                                    value: "t",
                                    fontSize: 14,
                                    fontFamily: "inherit",
                                    color: "#000000"
                                },
                            ],
                        })
                    }
                }
                return slide
            })
            history.addHistoryItem(newState)
            return newState
        }
        case PresentationActions.ADD_GRAPHIC_BLOCK: {
            const newState = state.map(slide => {
                if (slide.id === action.payload.slideId && action.payload.type === 'circle')
                {
                    return {
                        ...slide,
                        data: slide.data.concat({
                            id: uuid(),
                            size: {
                                width: 400,
                                height: 400,
                            },
                            position: {
                                x: 12,
                                y: 10,
                            },
                            type: 'graphic',
                            data: {
                                type: "circle",
                                size: {
                                    width: 400,
                                    height: 400,
                                },
                                background: "#00FF00",
                            }
                        })
                    }
                }
                if (slide.id === action.payload.slideId && action.payload.type === 'square')
                {
                    return {
                        ...slide,
                        data: slide.data.concat({
                            id: uuid(),
                            size: {
                                width: 200,
                                height: 200,
                            },
                            position: {
                                x: 12,
                                y: 10,
                            },
                            type: 'graphic',
                            data: {
                                type: "square",
                                size: {
                                    width: 200,
                                    height: 200,
                                },
                                background: "#00FF00",
                            }
                        })
                    }
                }
                if (slide.id === action.payload.slideId && action.payload.type === 'triangle')
                {
                    return {
                        ...slide,
                        data: slide.data.concat({
                            id: uuid(),
                            size: {
                                width: 160,
                                height: 40,
                            },
                            position: {
                                x: 12,
                                y: 10,
                            },
                            type: 'graphic',
                            data: {
                                type: "triangle",
                                size: {
                                    firstSide: 80,
                                    secondSide: 80,
                                    thirdSide: 80,
                                },
                                background: "#00FF00",
                            }
                        })
                    }
                }
                return slide
            })
            history.addHistoryItem(newState)
            return newState
        }
        case PresentationActions.ADD_IMAGE_BLOCK: {
            const newState = state.map(slide => {
                if (slide.id === action.payload.slideId) {
                    return {
                        ...slide,
                        data: slide.data.concat({
                            id: uuid(),
                            size: {
                                width: 300,
                                height: 240,
                            },
                            position: {
                                x: 12,
                                y: 10,
                            },
                            type: 'image',
                            data: action.payload.data
                        })
                    }
                }
                return slide
            })
            history.addHistoryItem(newState)
            return newState
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

export { slidesReducer }