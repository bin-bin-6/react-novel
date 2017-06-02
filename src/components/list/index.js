import './index.scss';
import React, {Component} from 'react';
import { Link } from 'react-router';

class List extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return (
     <div className= 'list'>
        <div className ="list-title">
          今日推荐
        </div>
        <ul className = "list-item-box">
            <Link to='/detail'><li className = "list-item">
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
                      <span className="info-detail-title">作者</span>
                      <span>大灰狼</span>
                   </li>
                </ul>
                <div>
                  世间毁誉，世人冷眼，与我何干？我自淡然一笑；以吾本性，快意.....
                </div>
              </div>
            </li>
            </Link>
          </ul>
      </div>
    );
  }
};

List.contextTypes = {
  router: React.PropTypes.object
};

module.exports = List;