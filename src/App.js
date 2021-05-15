import React from 'react';
import './App.css';
import Counter from "./Components/Counter";
import DisplayCounter from "./Components/DisplayCounter";

let maxValue = 1000;

class App extends React.Component{
    constructor(){
        super();
        this.state={
            counter: 1,
        }
    }

    componentDidMount(){
        fetch("https://interview-8e4c5-default-rtdb.firebaseio.com/front-end/counter1.json")
            .then(response => response.json())
            .then(data => this.setState({counter: data}));
    }

    onUpdateCounter = (type) => {
        let {counter} = this.state;
        if(type === "ADD"){
            if(counter !== maxValue){
                this.setState({counter: this.state.counter + 1}, () => {
                    this.postHit()
                });
            }
        }
        else if(type === "SUB"){
            if(counter !== 1){
                this.setState({counter: this.state.counter - 1}, () => {
                    this.postHit()
                });
            }
        }
    };

    typeCounterValue = (e) => {
        if(0 < e.target.value && e.target.value < maxValue+1){
            this.setState({counter: e.target.value}, () => {
                this.postHit()
            })
        }
    };


    postHit = async () => {
        let {counter} = this.state;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ counter1: this.state.counter })
        };
        const response = await fetch('https://interview-8e4c5-default-rtdb.firebaseio.com/front-end.json', requestOptions);
        const data = await response.json();
        this.setState({ name: data.name });
    };

    render(){

        let {counter} = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <Counter counter={counter} onUpdateCounter={this.onUpdateCounter}
                             typeCounterValue={this.typeCounterValue}/>
                    <DisplayCounter counter={counter}/>
                </header>
            </div>
        );
    }
}

export default App;
