import './index.scss';
import React, {Component} from 'react';
import { Link } from 'react-router';

class Btn extends Component {

  constructor(props){
    super(props);
    this._onClick=this._onClick.bind(this);
  }
  componentDidMount(){
    // console.log(this.refs.myBtn);
    // var btnNode = this.refs.myBtn;
    // btnNode.style.display='none';
  }
  _onClick(event){
    console.log(this);
    this.context.router.push('/home/idname');
  }
  render() {
    return (
     <div className= 'btnBox'>
          <div ref="myBtn" className={'btn clickAble'} onClick={this._onClick}>Hello React</div>
      </div>
    );
  }
};

Btn.contextTypes = {
  router: React.PropTypes.object
};

module.exports = Btn;