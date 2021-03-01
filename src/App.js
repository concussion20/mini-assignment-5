import React from 'react';
import './App.css';

let count = 0;

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isOff: props.isOff};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    count += this.state.isOff ? 1 : -1;
    this.setState(prevState => ({
      isOff: !prevState.isOff
    }));    
  }

  render() {
    return (
      <div onClick={this.handleClick} className={`child ${this.state.isOff ? 'white': 'black'}`}>
      </div>
    );
  }

}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: count};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({count: count});
  }

  render() {
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <div onClick={this.handleClick} className='grid'>
          <Child isOff/>
          <Child isOff/>
          <Child isOff/>
          <Child isOff/>
        </div>
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <Parent />
    </div>
  );
}

export default App;