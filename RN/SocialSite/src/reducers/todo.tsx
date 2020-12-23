import * as TYPES from '../constants/ActionTypes';

const initialState: any = {
    number: 1,
    histories: [1]
};

const todoReducers = (action: any, state = initialState) => {
    switch (action.type) {
        case TYPES.ADD_TODO:
            state = {
                ...state,

            }
            break;
        case TYPES.DELETE_TODO:
            state = {
                ...state,

            }
            break;
        case TYPES.UPDATE_TODO:
            state = {
                ...state,

            }
            break;
        case TYPES.CHECK_TODO:
            state = {
                ...state,

            }
            break;
        default: return { ...state }
    }
}


export default todoReducers;