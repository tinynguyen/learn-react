import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        console.log('Counter Constructor');
        super(props);
        this.state = {
            counter: 0
        }
    }
    descrease() {
        this.setState({
            counter: this.state.counter - 1
        });
    }

    increase() {
        this.setState({
            counter: this.state.counter + 1
        });
    }

    render() {
        console.log('Counter render');
        return(
            <div className="Counter">
                <button onClick={() => this.descrease()}>-</button>
                <span>{ this.state.counter }</span>
                <button onClick={() => this.increase()}>+</button>
            </div>
        )
    }
    componentDidMount() {
        console.log('Counter did mount');
        
    };
    
    componentDidUpdate() {
        console.log('Counter did update');
        
    };
    
    componentWillUnmount() {
        console.log('Counter will unmount');
        
    };

    shouldComponentUpdate(nextProps, nextState) {
        if(this.state.counter === nextState.counter) {
            return false;
        } else {
            return true;
        }
    };
}


export default Counter;