import { 
    DRAGGING, 
    GET_PHOTO, 
} from './../active_types'


export const formReducer = (
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
