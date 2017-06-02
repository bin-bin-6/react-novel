import './index.scss';
import React, {Component} from 'react';
import {Link} from 'react-router';
class NavBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div className ='detail-index-bar'>
        <div className= "detail-index">
              <div className = "image-box">
                <div className = "image" style ={{backgroundImage:'url(http://www.ting56.com/pic/images/2011-4/201142120502797328.jpg)'}}></div>
              </div>
              <div className = "info-box">
                <div className = "title">
                  异世邪君
                </div>
                <ul className="info-detail-box">
                   <li>
                      <span className="info-detail-title">分类:</span>
                      <span>玄幻武侠</span>
                   </li>
                   <li>
                      <span className="info-detail-title">作者:</span>
                      <span>大灰狼</span>
                   </li>
                   <li>
                      <span className="info-detail-title">来源:</span>
                      <span>起点男生</span>
                   </li>
                </ul>
              </div>
          </div>
          <div className="begin-read-btn">
            <Link to="/content">开始阅读</Link>
          </div>
     </div>
    );
  }
};


module.exports = NavBar;