import './index.scss';
import React, {Component} from 'react';

class Catalog extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div className ='detail-catalog-bar'>
        <div className='title'>
          目录
        </div>
        <div className='catalog-list'>
          <ul className='catalog-ul'>
            <li>第一章 扫地小厮</li>
            <li>第二章 撞破南墙不回头</li>
            <li>第三章 连败一百四十七场的男人</li>
            <li>第四章 黑书</li>
            <li>第五章 傲骨金身</li>
            <li>第六章 宝马配好鞍，美女赠英雄</li>
            <li>第七章 淬体境四层，气感诞生</li>
            <li>第八章 前凸后翘腿子长，肤白貌美腰身细？</li>
            <li>第九章 梦掌柜</li>
            <li>第十章 破财消灾</li>
          </ul>
        </div>
     </div>
    );
  }
};


module.exports = Catalog;