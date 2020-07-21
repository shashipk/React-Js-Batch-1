import {LOGIN_CHANGE, STORE_DATA, ORDER_BY_CHANGE, CATEGORY_CHANGE} from "./ActionTypes";

const initialState = {
    userData: null,
    inventory: [],
    userRef: null,
    orderBy: null,
    category: 'all'
};

export default function rootReducer(state=initialState, action) {
    switch (action.type) {
        case LOGIN_CHANGE:
            return{
                ...state,
                userData: action.payload,
                userRef: action.userRef
            };
        case STORE_DATA:
            return {
                ...state,
                inventory: action.payload
            };
        case ORDER_BY_CHANGE:
            return {
                ...state,
                orderBy: action.payload
            };
        case CATEGORY_CHANGE:
            return {
                ...state,
                category: action.payload
            };
        default:
            return state;
    }
}