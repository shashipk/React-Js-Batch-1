import React, {useState} from "react";
import A from "./A";
import C from "./C";

export const MyContext = React.createContext();

export default function ContextAPI(){
    const [count, setCount] = useState(0);
    return (
        <MyContext.Provider value={[count, setCount]}>
            <A/>
            <C/>
        </MyContext.Provider>
    );
}