import React, {useContext} from "react";
import {ApiContext} from "./ContextAndReducer";


export default function A(){
    const {state} = useContext(ApiContext);
    const DisplayUserNames = ({name}) => {
        return(
            <li>{name}</li>
        );
    };
    return(
        <ul>

            {state.usersData.map(user => <DisplayUserNames key={user.login} name={user.login}/>)}
        </ul>
    );
}