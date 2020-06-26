import {POPULATE_DATA} from "./ActionTypes";

export const initialState  = {
    usersData: []
};

export default function rootReducer (state, action){
    switch(action.type){
        case POPULATE_DATA:
            return {
                ...state,
                usersData: action.payload
            };
        default:
            return state;
    }
};