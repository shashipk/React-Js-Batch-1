import React, {useState} from 'react';
import LifeCycleClassBased from "./Components/LifecycleClassBased/LifeCycleClassBased";
import './App.css';
import FunctionalUseEffect from "./Components/FunctionalUseEffect/FunctionalUseEffect";
import ContextAPI from "./Components/ContextAPI/ContextAPI";
import ContextAndReducer from "./Components/ContextAndReducer/ContextAndReducer";

function App() {
 /* const [display, toggleDisplay] = useState(true);
  return (
      <div>
        {display ? <FunctionalUseEffect/> : <></>}
        <button type="button" onClick={() => toggleDisplay(!display)}>
          Toggle Display
        </button>
      </div>

  );*/

/* return(
   <ContextAPI/>
 );*/

return(
    <ContextAndReducer/>
);
}

export default App;
