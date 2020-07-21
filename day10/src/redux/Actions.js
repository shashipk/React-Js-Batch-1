import { LOGIN_CHANGE, STORE_DATA, ORDER_BY_CHANGE, CATEGORY_CHANGE } from "./ActionTypes";

export function LoginChange(userData, userRef) {
    return {
        type: LOGIN_CHANGE,
        payload: userData,
        userRef
    };
}

export function StoreData(inventory) {
    return {
        type: STORE_DATA,
        payload: inventory
    };
}

export function OrderByChange(orderBy){
    return {
        type: ORDER_BY_CHANGE,
        payload: orderBy
    };
}

export function CategoryChange(newCategory) {
    return {
        type: CATEGORY_CHANGE,
        payload: newCategory
    };
}