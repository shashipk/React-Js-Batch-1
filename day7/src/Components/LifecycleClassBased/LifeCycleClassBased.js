import React, {Component} from 'react';

class LifeCycleClassBased extends Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            name: '',
            coordX : 0,
            coordY: 0
        };

        this.mouseMoveCapture = (event) => {
            this.setState({
                coordX: event.clientX,
                coordY: event.clientY
            });
        };

    }



    componentDidMount() {

        document.title = `Clicked ${this.state.count} times`;
        window.addEventListener('mousemove', this.mouseMoveCapture);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevState.count !== this.state.count){
            console.log("Updating the title");
            document.title = `Clicked ${this.state.count} times`;
        }
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.mouseMoveCapture);
    }

    render() {
        return (
            <>
                <button type="button"
                        onClick={() => this.setState({count: this.state.count + 1})}>
                    Increment counter
                </button>
                <input type='text'
                       placeholder='Enter name'
                       onChange={event => this.setState({name: event.target.value})}/>
                <div>
                    <span> X-coordinate: {this.state.coordX} </span>
                    <span> Y-coordinate: {this.state.coordY} </span>
                </div>
            </>

        );
    }
}

export default LifeCycleClassBased;