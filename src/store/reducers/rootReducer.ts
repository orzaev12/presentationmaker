import { slidesReducer } from "./slidesReducer.ts";
import { combineReducers } from 'redux'
import { titleReducer } from "./titleReducer.ts";
import { currentSlideReducer } from "./currentSlideReducer.ts";

export const rootReducer =  combineReducers({
    title: titleReducer,
    slides: slidesReducer,
    indexOfCurrentSlide: currentSlideReducer,
})

export type RootState = ReturnType<typeof rootReducer>