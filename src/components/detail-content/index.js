import './index.scss';
import React, {Component} from 'react';

class DetailContent extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div className ='detail-content-bar'>
        <div className='title'>
          内容简介
        </div>
        <div className="content">      
            武之巅峰，是孤独，是寂寞，是漫漫求索，是高处不胜寒逆境中成长，绝地里求生，不屈不饶，才能堪破武之极道。凌霄阁试炼弟子兼扫地小厮杨开偶获一本无字黑书，从此踏上漫漫武道。请关注我的公众号“莫默”。
        </div>
     </div>
    );
  }
};


module.exports = DetailContent;