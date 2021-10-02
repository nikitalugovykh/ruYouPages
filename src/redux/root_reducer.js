import { combineReducers } from "redux"
import { ADD_NEW_COLOR, CHANGING_COLOR, DRAGGING, GET_PHOTO, REMOVE_COLOR } from "./active_types"

const paletteReducer = (
    state = {
        colors: [],
        changingColor: {h: 204.43875059789542, s: 1, v: 0.9996529134114583, source: 'hsv'}
        }, 
    action) => {

    switch (action.type) {
        case CHANGING_COLOR:
            return {
                ...state, 
                changingColor: action.color
            }
        case ADD_NEW_COLOR:
            return {...state, colors: [...state.colors, {color: action.color, id: action.id}]}
        case REMOVE_COLOR:
            return {...state, colors: state.colors.filter(color => color.id !== action.id)}
        default: 
            return state
    }
}
const formReducer = (
    state = {
            photo:'',
            dragging: false
        }, 
    action) => {

    switch (action.type) {
        case GET_PHOTO:
            return {...state, photo: action.data}
        case DRAGGING: 
            return {...state, dragging: !state.dragging}   
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    palette: paletteReducer,
    form: formReducer
})