import React from 'react';
import List from "./Components/List/List";
import Timer from "./Components/Timer/TimerFunctional";
import "./App.css";

function App() {
  return (
    <div className={'wrapper'}>
      <List message={'Hello world'} className={'abcd'}/>
      <Timer/>
    </div>
  );
}

export default App;
