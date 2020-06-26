import React, {useContext} from "react";
import {ApiContext} from "./ContextAndReducer";
import {PopulateData} from "./ActionsCreators";

export default function B(){
    const {dispatch} = useContext(ApiContext);

    const fetchData = async() => {

        try{
            const res = await fetch('https://api.github.com/users');
            const data = await res.json();
            dispatch(PopulateData(data));
        }catch (e) {
            console.log('Failed to fetch data');
        }

    };
    return(
      <button type='button' onClick={fetchData}>
          Fetch Data
      </button>
    );
}