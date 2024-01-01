import {Action, PresentationActions} from "../actions/actions.ts"
import {presentation} from "../../const/const.ts"
import {createHistory} from "../history.ts"
import {GraphicBlock, ImageBlock, Slide, TextBlock} from "../../types/types.ts"
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
                        data: slide.data!.concat({
                            id: uuid(),
                            size: {
                                width: 30,
                                height: 24,
                            },
                            position: {
                                x: 10,
                                y: 10,
                            },
                            type: 'text',
                            value: 'Text',
                            fontSize: 14,
                            fontFamily: 'Inherit',
                            color: '#000000',
                            underline: false,
                            italic: false,
                            bold: false,
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
                        data: slide.data!.concat({
                            id: uuid(),
                            type: 'graphic',
                            size: {
                                width: 400,
                                height: 400,
                            },
                            position: {
                                x: 10,
                                y: 10,
                            },
                            data: 'circle',
                            background: '#808080',
                        })
                    }
                }
                if (slide.id === action.payload.slideId && action.payload.type === 'square')
                {
                    return {
                        ...slide,
                        data: slide.data!.concat({
                            id: uuid(),
                            type: 'graphic',
                            size: {
                                width: 200,
                                height: 200,
                            },
                            position: {
                                x: 10,
                                y: 10,
                            },
                            data: 'square',
                            background: '#808080',
                        })
                    }
                }
                if (slide.id === action.payload.slideId && action.payload.type === 'triangle')
                {
                    return {
                        ...slide,
                        data: slide.data!.concat({
                            id: uuid(),
                            type: 'graphic',
                            size: {
                                width: 160,
                                height: 80,
                            },
                            position: {
                                x: 10,
                                y: 10,
                            },
                            data: 'triangle',
                            background: '#808080',
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
                        data: slide.data!.concat({
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
        case PresentationActions.SET_SELECTED_BLOCK: {
            return state.map(slide => {
                if (slide.id === action.payload.slideId) {
                    return {
                        ...slide,
                        selectedBlockId: action.payload.blockId,
                    }
                }
                return slide
            })
        }
        case PresentationActions.CHANGE_POSITION_OF_BLOCK: {
            const newState = state.map(slide => {
                if (slide.id === action.payload.slideId) {
                    const newBlock: TextBlock|GraphicBlock|ImageBlock  = slide.data?.map(block => {
                        if (block.id === action.payload.blockId) {
                            return {
                                ...block,
                                position: action.payload.newPosition,
                            }
                        }
                    })
                }
                //TODO поменять возвращаемый слайд
                return slide
            })
            history.addHistoryItem(newState)
            return newState
        }
        case PresentationActions.SET_UNDERLINE_TEXT: {
            const newState = state.map(slide => {
                if (slide.id === action.payload.slideId) {
                    slide.data?.map(block => {
                        if (block.id === action.payload.blockId) {
                            let textBlock = block as TextBlock
                            return  {
                                ...textBlock,
                                underline: !textBlock.underline
                            }
                        }
                    })
                }
                //TODO поменять возвращаемый слайд
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