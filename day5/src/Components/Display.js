import React from "react";
import {connect} from "react-redux";
import {BuyCake, BuyIceCream} from "../redux/ActionCreators";

function Display({numOfCakes, numOfIceCreams, BuyCake, BuyIceCream}){
    return(
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <div style={{display: 'flex'}}>
              <h1> Number of Ice Creams: </h1>
              <h1> {numOfIceCreams} </h1>
              <button onClick={() => BuyIceCream(1)}> Buy Ice Cream </button>
          </div>
          <div style={{display: 'flex'}}>
              <h1> Number of Cakes: </h1>
              <h1> {numOfCakes} </h1>
              <button onClick={() => BuyCake(1)}> Buy Cake </button>
          </div>
      </div>
    );
}

const mapStateToProps = (state) => {
    /*const {cake, iceCream} = state;
    return {
        numOfCakes: cake.numOfCakes,
        numOfIceCreams: iceCream.numOfIceCreams
    };*/
    const {numOfCakes, numOfIceCreams} = state;
    return {
        numOfCakes,
        numOfIceCreams
    };
};

const mapDispatchToProps = {
    BuyCake,
    BuyIceCream
};

export default connect(mapStateToProps, mapDispatchToProps)(Display);