import React from "react";


export default class List extends React.Component{
    constructor(props){
        super(props);
        console.log("In constructor");
        this.state = {
          loading: false,
          fruitCart: ['apple', 'mango', 'guava', 'watermelon', 'banana']
        };
    }

    static getDerivedStateFromProps(props, state){
        console.log("In getDerivedStateFromProps");
    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("should component update");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Inside get snapshot");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("component did update")
    }

    componentDidMount(){
        console.log("in component did mount");
    }

    render(){
        console.log("Inside render");
        const handleClick = (event) => {
            event.preventDefault();
            const [, ...rest] = this.state.fruitCart;
            this.setState({
                fruitCart: rest
            }, () => {
                console.log(this.state.fruitCart);
            });
            this.setState({
                loading: true
            }, () => {
                setTimeout(() => {
                    this.setState({
                        fruitCart: rest
                    }, () => {
                        this.setState({
                            loading: false
                        })
                    })
                }, 1000)


            })
        };


        const handleClickEs6 = async(event) => {
          event.preventDefault();
          const [, ...rest] = this.state.fruitCart;
          await this.setState({loading: true});
          setTimeout(async() => {
              await this.setState({fruitCart: rest});
              await this.setState({loading: false});
          }, 1000);
        };

        return (
          <>
              <ul>
                  {this.state.loading ? <h1>Loading </h1> : this.state.fruitCart.map(fruit => <li>{fruit}</li>)}
              </ul>
              {this.state.loading ? < React.Fragment/> : <button onClick={handleClickEs6}>

                  Delete a fruit
              </button>}

          </>
        );
    }
}