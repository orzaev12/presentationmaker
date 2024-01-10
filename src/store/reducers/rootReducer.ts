import { combineReducers } from "redux";
import { presentationReducer } from "./presentationReducer.ts";

export const rootReducer = combineReducers({
  presentation: presentationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
