import React, { Component } from 'react';
import './App.css';

import Videos from './routes/Videos';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Videos />
      </div>
    );
  }
}

export default App;
