import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {BuyCake, AddCake} from "../redux/ActionCreators";

export default function Cake(){
    const numCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
    const [countCakes, setCountCakes] = useState(0);
    return(
      <div className="container">
          <span className="header"> Number of Cakes: {numCakes}</span>
          <input type="number"
                 value={countCakes}
                 min={0}
                 max={numCakes}
                 onChange={event => {
                     let {value} = event.target;
                     if(!value || value === '') value = 0;
                     if(value>numCakes) value = numCakes;
                     value = parseInt(value);
                     setCountCakes(value);
                 }} />
          <button onClick={() => dispatch(BuyCake(countCakes))} >
              Buy Cake
          </button>

          <button onClick={() => dispatch(AddCake(countCakes))}>
              Add Cake
          </button>
      </div>
    );
}