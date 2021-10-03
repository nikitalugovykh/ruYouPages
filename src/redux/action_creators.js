import tinycolor from "tinycolor2"
import { 
    ADD_NEW_COLOR, 
    CHANGING_COLOR, 
    DRAGGING, GET_PHOTO, 
    REMOVE_COLOR, 
    SHOW_COLOR_PICKER, 
    UPDATE_COLOR 
} from "./active_types"

export const changingColor = (color) => {
    return {
        type: CHANGING_COLOR,
        color,
    }
}

export const updateColor = (payload) => {
    return {
        type: UPDATE_COLOR,
        payload,
    }
}

export const addNewColor = (color, id) => {
    return {
        type: ADD_NEW_COLOR,
        color,
        id
    }
}
export const removeColor = (id) => {
    return {
        type: REMOVE_COLOR,
        id
    }
}

export const showColorPicker = () => {
    return {
        type: SHOW_COLOR_PICKER,
    }
}

export const updatePhoto = (data) => {
    return {
        type: GET_PHOTO,
        data
    }
}
export const dragging = () => {
    return {
        type: DRAGGING,
    }
}
