import React from 'react';

export default class Bomb extends React.Component{

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    decrement = () => {
        const newSecondsLeft = this.state.secondsLeft - 1 
        this.setState({
            secondsLeft: newSecondsLeft
        })
    }

    render(){
        return (
            <div onClick={this.decrement} >
                {this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'}
            </div>
        );
    }
}
