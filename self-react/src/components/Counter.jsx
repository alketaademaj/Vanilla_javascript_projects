import React, { Component } from "react";
import NumberComponent from "./NumberComponent";

export class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 1,
      sign: 1,
    };
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + this.state.sign,
    });
    if (this.state.counter === 10 || this.state.counter === 0) {
      this.setState({
        sign: -this.state.sign,
        counter: this.state.counter - this.state.sign,
      });
    }
  };

  //Every class component has 4 kind of life cycle methods. 1. mounting 2. updating 3. unmounting 4. error handling
  //you can do ajax request in it
  componentDidMount(){
    setInterval(this.increment, 1000);
  }

  componentDidUpdate() {
    console.log("Just trying this out");
  }

  componentWillUnmount() {
    
  }



  resetter = () => {
    this.setState({
      counter: 1,
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <NumberComponent resetter={this.resetter} />
      </div>
    );
  }
}

export default Counter;
