//Functions that returns an action

//Action is an object that contains a type describing what action needs to be performed and some data

import {BUY_CAKE, BUY_ICE_CREAM} from "./ActionTypes";


export function BuyCake(numCakes){
    return {
        type: BUY_CAKE,
        payload: numCakes
    };
}

export function BuyIceCream(numIceCreams){
    return {
        type: BUY_ICE_CREAM,
        payload: numIceCreams
    };
}
