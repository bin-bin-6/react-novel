import React, { Component } from 'react';
import Login from './login/index';

class App extends Component {
  render() {
    return (
      <div>
           {this.props.children || <Login/>}
      </div>
    );
  }
}

export default App;
