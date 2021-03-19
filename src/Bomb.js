import React from 'react';

export default class Bomb extends React.Component{

    constructor(props){
        super();
        this.state = {
            secondsLeft: props.initialCount
        }
    }

    increment = () => {
        const newSecondsLeft = this.state.secondsLeft - 1 
        this.setState({
            secondsLeft: newSecondsLeft
        })
    }

    render(){
        return (
            this.state.secondsLeft === 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'
        );
    }
}
