import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {BuyCake, BuyIceCream} from "../redux/ActionCreators";
export default function DisplayHooks(){
    const numOfCakes = useSelector(state => state.numOfCakes);
    const numOfIceCreams = useSelector(state => state.numOfIceCreams);

    const dispatch = useDispatch();

    return(
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex'}}>
                <h1> Number of Ice Creams: </h1>
                <h1> {numOfIceCreams} </h1>
                <button onClick={() => dispatch(BuyIceCream(1))}> Buy Ice Cream </button>
            </div>
            <div style={{display: 'flex'}}>
                <h1> Number of Cakes: </h1>
                <h1> {numOfCakes} </h1>
                <button onClick={() => dispatch(BuyCake(1))}> Buy Cake </button>
            </div>
        </div>
    );
}