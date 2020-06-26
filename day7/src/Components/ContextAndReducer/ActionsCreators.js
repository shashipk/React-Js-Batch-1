import {POPULATE_DATA} from "./ActionTypes";

export function PopulateData(data){
    return {
        type: POPULATE_DATA,
        payload: data
    };
}