import './index.scss';
import React, {Component} from 'react';
import {hashHistory} from 'react-router';
import { Modal } from 'antd';

class DetailHeader extends Component {
  constructor(props){
    super(props);
    this.state = { visible: false }
    this._goBack = this._goBack.bind(this);
    this._getMore = this._getMore.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  _goBack(){
    hashHistory.goBack();
  }
  _getMore(){
    console.log('我被点击了');
    this.setState({
      visible: true,
    });
  }
  handleOk(e){
    this.setState({
      visible: false,
    });
  }
  handleCancel(e){
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
    <div className ='detail-header-bar'>
        <div  onClick={(event)=>{this._goBack()}}>
          返回
        </div>
        <div className='header-title'>
          异世邪君
        </div>
        <div onClick={()=>{this._getMore()}}>
          更多
        </div>
        <Modal
          title='温馨提示'
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>更多功能正在努力开发中,敬请期待!</p>
        </Modal>
     </div>
    );
  }
};


module.exports = DetailHeader;