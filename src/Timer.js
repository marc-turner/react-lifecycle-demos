import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date() };
        console.log('In constructor');
    }
    // componentDidMount() {
    //     console.log('Component Did Mount');
    //     this.timerID = setInterval(() => {
    //         this.setState({ time: new Date() });
    //     }, 1000);
    }
    render() {
        console.log('In Render');
        return <div>{/* <h1>{this.state.time.getSeconds()}</h1> */}</div>;
    }
}

export default Timer;
