import {ADD_USER, REMOVE_USER} from "./ActionTypes";

const initialState = {
    users: []
};

export default function rootReducer(state=initialState, action){
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload]
            };
        case REMOVE_USER:
            return{
                ...state,
                users: state.users.filter(user => user.name !== action.payload)
            };
        default:
            return state;

    }
}