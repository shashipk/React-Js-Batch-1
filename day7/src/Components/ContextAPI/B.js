import React, {useContext} from "react";
import {MyContext} from "./ContextAPI";

export default function B(){
    const [count] = useContext(MyContext);
    return(
        <>
            <span> Hello from B. The count is {count} </span>
            <br/>
        </>

    );
}