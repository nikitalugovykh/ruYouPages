import { 
    DECREASE_DRAGG_COUNTER,
    DRAGGING, 
    DRAGG_COUNTER, 
    GET_PHOTO,
    INCREASE_DRAGG_COUNTER,
    UPDATE_FIRST_NAME,
    UPDATE_PATRONYMIC_NAME,
    UPDATE_RESPONSE,
    UPDATE_SECOND_NAME, 
} from './../active_types'


export const formReducer = (
    state = {
            fullName: {
                firstName: '',
                secondName: '',
                patronymic: ''
            },
            photo:'',
            photoBase64:'',
            dragging: false, 
            response: '',
            dragCounter: 0
        }, 
    action) => {

    switch (action.type) {
        case UPDATE_FIRST_NAME:
            return {...state, fullName: {...state.fullName, firstName: action.name}}
        case UPDATE_SECOND_NAME:
            return {...state, fullName: {...state.fullName, secondName: action.name}}
        case UPDATE_PATRONYMIC_NAME:
            return {...state, fullName: {...state.fullName, patronymic: action.name}}
        case GET_PHOTO:
            return {...state, photo: action.data}
        case UPDATE_RESPONSE:
            return {...state, response: action.data}
        case DRAGGING: 
            return {...state, dragging: !state.dragging}   
        case DRAGG_COUNTER: 
            return {...state, dragCounter: action.num}   
        case DECREASE_DRAGG_COUNTER: 
            return {...state, dragCounter: state.dragCounter--}   
        case INCREASE_DRAGG_COUNTER: 
            return {...state, dragCounter: state.dragCounter++}   
        default:
            return state;
    }
}
