import React, {useEffect, useState} from "react";

export default function FunctionalUseEffect(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const [coordX, setCoordX] = useState(0);
    const [coordY, setCoordY] = useState(0);

    const captureMouseMove = (event) => {
        setCoordX(event.clientX);
        setCoordY(event.clientY);
    };

    useEffect(function(){
        window.addEventListener('mousemove', captureMouseMove);

        return () => {
            window.removeEventListener('mousemove', captureMouseMove);
        };
    }, []);

    useEffect(function() {
        console.log("Function is called");
        document.title = `Clicked ${count} times`;
    }, [count]);

    useEffect(function(){
        console.log("new name entered is ", name);
    }, [name]);

    return(
        <>
            <button onClick={() => setCount(count+1)}>
                Increment functional counter
            </button>
            <input type='text'
                   value={name}
                   placeholder='Enter your name'
                   onChange={event => setName(event.target.value)} />

            <div>
                <span> X-coordinate: {coordX} </span>
                <span> Y-coordinate: {coordY} </span>
            </div>
        </>

    );
}
