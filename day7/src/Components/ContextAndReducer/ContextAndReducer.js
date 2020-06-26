import React, {useReducer} from "react";
import A from "./A";
import B from "./B";
import rootReducer, {initialState} from "./Reducer";

export const ApiContext = React.createContext();

export default function ContextAndReducer(){
    const [state, dispatch] = useReducer(rootReducer, initialState);
    return(
      <ApiContext.Provider value={{state, dispatch}}>
          <A/>
          <B/>
      </ApiContext.Provider>
    );
}