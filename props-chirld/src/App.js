import React, { Component } from 'react';
import Accordion from './components/Accordion';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Accordion heading="Hello">
          Input something here ==> This is props chirldren
        </Accordion>
      </div>
    );
  }
}

export default App;
