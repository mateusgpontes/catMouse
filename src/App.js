import React, { Component } from 'react';
import Mouse from './Components/Mouse';
import MouseCat from './Components/MouseCat';

class App extends Component {
  render() {
    return (
      <div style={{ height: '100%' }}>
        <Mouse /> 
      </div>
    );
  }
}

export default App;
