import React from 'react';

import "./App.css";


const Button = ({handleClick, name}) => {
  return (
    <button onClick={handleClick}> {name} </button>
  );
};


export function FirstApp() {
  const clickButton = (event, name) => {
      console.log(`${name} Button is Clicked`);
  };

  

  return (
    <div className="wrapper">
        <Button name="First Button"  handleClick={(event) => clickButton(event, "First")}/>
        <Button name="Second Button" handleClick={(event) => clickButton(event, "Second")}/>
    </div>
  );
}

