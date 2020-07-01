import {ADD_USER, REMOVE_USER} from "./ActionTypes";

export function AddUser(payload) {
    return{
        type: ADD_USER,
        payload
    };
}

export function RemoveUser(payload){
    return{
        type: REMOVE_USER,
        payload
    }
}