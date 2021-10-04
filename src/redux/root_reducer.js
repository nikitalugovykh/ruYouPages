import { combineReducers } from "redux"
import { formReducer } from "./reducers/formReducer"
import { paletteReducer } from "./reducers/paletteReducer"


export const rootReducer = combineReducers({
    palette: paletteReducer,
    form: formReducer,
})