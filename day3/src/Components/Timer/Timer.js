import React from "react";

export default class Timer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.timer = setInterval(()=>{
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }


    render(){
        return (
          <h1>{this.state.time}</h1>
        );
    }
}