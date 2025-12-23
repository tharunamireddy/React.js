import React, { Component } from 'react'

class Counter extends Component {

    state = {counter:0}

    inc =()=>{
        this.setState(prev=>({counter:prev.counter+1}))
        this.setState(prev=>({counter:prev.counter+1}))
    }

    re = ()=>{
        this.setState({counter:0})
    }

    dec =()=>{
        this.setState(prev=>({counter:prev.counter-1}))
        this.setState(prev=>({counter:prev.counter-1}))
    }

  render() {
    return (
      <div>
        <h2>Counter Component</h2>
        <p>{this.state.counter}</p>
        <button onClick={this.dec}>-</button>
        <button onClick={this.re}>Reset</button>
        <button onClick={this.inc}>+</button>
      </div>
    )
  }
}

export default Counter