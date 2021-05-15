import React, {Component} from 'react';

export default class Counter extends Component{

    render() {
        let {counter, onUpdateCounter, typeCounterValue} = this.props;
        return (
            <div className="counter-wrapper">
                <div className="action-btn minus-link" onClick={() => onUpdateCounter("SUB")}>-</div>
                {/*<div className="counter-val">{counter}</div>*/}
                <input type="number" value={counter} onChange={typeCounterValue}/>
                <div className="action-btn plus-link" onClick={() => onUpdateCounter("ADD")}>+</div>
            </div>
        )
    }
}
