import React, {useState, useEffect} from "react";


export default function Timer() {
    const [currentTime, updateCurrentTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            updateCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
    }, []);

    return <h1>{currentTime}</h1> ;
}