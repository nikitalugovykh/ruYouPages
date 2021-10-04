import { 
    ADD_NEW_COLOR, 
    CHANGE_PERMISSION_UPDATE_COLOR, 
    CHANGING_COLOR, 
    DECREASE_DRAGG_COUNTER, 
    DRAGGING, DRAGG_COUNTER, GET_PHOTO, 
    INCREASE_DRAGG_COUNTER, 
    REMOVE_COLOR, 
    SHOW_COLOR_PICKER, 
    UPDATE_COLOR, 
    UPDATE_FIRST_NAME, 
    UPDATE_PATRONYMIC_NAME,
    UPDATE_RESPONSE,
    UPDATE_SECOND_NAME
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

export const changePermissionForUpdateColor = (id) => {
    return {
        type: CHANGE_PERMISSION_UPDATE_COLOR,
        id,
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


export const updateFirstName = (name) => {
    return {
        type: UPDATE_FIRST_NAME,
        name
    }
}

export const updateSecondName = (name) => {
    return {
        type: UPDATE_SECOND_NAME,
        name
    }
}
export const updatePatronymicName = (name) => {
    return {
        type: UPDATE_PATRONYMIC_NAME,
        name
    }
}

export const updatePhoto = (data) => {
    return {
        type: GET_PHOTO,
        data
    }
}

export const updateResponse = (data) => {
    return {
        type: UPDATE_RESPONSE,
        data
    }
}
export const dragging = () => {
    return {
        type: DRAGGING,
    }
}

export const setDragCounter = (num) => {
    return {
        type: DRAGG_COUNTER,
        num
    }
}
export const increaseDragCounter = () => {
    return {
        type: INCREASE_DRAGG_COUNTER,
    }
}
export const decreaseDragCounter = () => {
    return {
        type: DECREASE_DRAGG_COUNTER,
    }
}
