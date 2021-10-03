import { 
    ADD_NEW_COLOR, 
    CHANGE_PERMISSION_UPDATE_COLOR, 
    CHANGING_COLOR, 
    REMOVE_COLOR, 
    SHOW_COLOR_PICKER, 
    UPDATE_COLOR 
} from './../active_types'

export const paletteReducer = (
    state = {
        colors: [],
        showColorPicker: false,
        changingColor: {h: 204.43875059789542, s: 1, v: 0.9996529134114583, source: 'hsv'},
        }, 
    action) => {

    switch (action.type) {
        case CHANGING_COLOR:
            return {
                ...state, 
                changingColor: action.color
            }
        case ADD_NEW_COLOR:
            return {...state, colors: [...state.colors, {color: action.color, id: action.id, changeColor: true}]}
        case UPDATE_COLOR:
            return {...state, colors: state.colors.map(color => {
                    if (color.changeColor === true) {
                        if (typeof action.payload === 'boolean') {
                            return {color: color.color, id: color.id, changeColor: action.payload} 
                        } else {

                            return {color: action.payload, id: color.id, changeColor: true} 
                        }
                    } return color})
            }
        case CHANGE_PERMISSION_UPDATE_COLOR:
            return {...state, colors: state.colors.map(color => {
                if (color.id === action.id) {
                    return {color: color.color, id: color.id, changeColor: true} 
                } return color})
        }
        case REMOVE_COLOR:
            return {...state, colors: state.colors.filter(color => color.id !== action.id)}
        case SHOW_COLOR_PICKER:
            return {...state, showColorPicker: !state.showColorPicker}
        default: 
            return state
    }
}

