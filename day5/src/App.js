import React from 'react';
import {Provider} from "react-redux";
import {store} from "./redux/Store";
import Display from "./Components/Display";
import DisplayHooks from "./Components/DisplayHooks";
import Cake from "./Components/Cake";
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Cake/>
    </Provider>
  );
}

export default App;
