import React, { Component } from 'react';
import Advice from './Component/Advice';
import Button from './Component/Button'
import './App.css';

class App extends Component {
  state = {advice: "No advice generated yet..."}
  generateAdvice = () => {
    this.setState({advice: 'Loading...'});
    fetch('https://api.adviceslip.com/advice').then(
      (r) => r.json().then(
        (e) => {
          this.setState({advice: e.slip.advice});
        }
      )
    )
  }
  render() {
    return (
      <div className="App">
        <h1>Advice Generator</h1>
        <Advice advice={this.state.advice}/>
        <Button handleClick={this.generateAdvice} />
      </div>
    );
  }
}

export default App;
