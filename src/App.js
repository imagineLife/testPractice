import React, { Component } from 'react';
import Title from './Title/'
import Link from './Link'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="App-header">
          <h1 alt="dummyAlt" className="App-title" id="h1ID">Testing Overview</h1>
        </header>
        <Title text="dummy title"/>
        <Link address={'dummyLinkText'} tOrF={true} />
        <ul className="myClass">
          <li>List Item 1</li>
          <li>List Item 2</li>
          <li>List Item 3</li>
        </ul>
        <p className="App-intro">
          Mic Check?!
        </p>
      </React.Fragment>
    );
  }
}

export default App;
