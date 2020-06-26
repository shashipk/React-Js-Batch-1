import React, {useContext} from "react";
import {MyContext} from "./ContextAPI";


export default function D(){
    const [count, setCount] = useContext(MyContext);
    return(
        <>
            <span> Hello from D </span>

            <button type="button" onClick={() => setCount(count+1)}>
                Increment counter
            </button>
            <br/>
        </>


    );
}