import React, { Component } from 'react';
import Title from './Title/';
import Link from './Link';
import './main.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  state = { 
    on: false,
    input: '',
    mainColor: 'blue'
  }

  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 alt="dummyAlt" className="App-title" id="h1ID">Testing Overview</h1>
        </header>
        <Title text="dummy title"/>
        <h3 className={this.state.mainColor}>Everyone is Welcome!</h3>
        <Link address={'dummyLinkText'} tOrF={true} />
        <ul className="myClass">
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
        <p className="App-intro">
          Mic Check?!
        </p>
        <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
        <button onClick={() => this.setState({on: !this.state.on})}>Click</button>
        <input onChange={(e) => this.setState({input: e.currentTarget.value})} type='text' />
        <h2>{this.state.input}</h2>
      </React.Fragment>
    );
  }
}

export default App;
