import './index.scss';
import React, { Component } from 'react';
import Btn from '../../components/btn';
import IndexIcon from '../../components/index-icon';
import Author from '../../components/author';

class Login extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className ="loginPage">
            <IndexIcon/>
            <Author/>
            <Btn/>
      </div>
    );
  }
}

export default Login;