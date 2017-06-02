import './index.scss';
// swiper module
import '../../lib/swiper/swiper.min.css';
import Swiper from '../../lib/swiper/swiper.min';

import React, {Component} from 'react';

class NavBar extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
        new Swiper ('#navBar .swiper-container', {
            slidesPerView: 4,
            paginationClickable: true,
            freeMode: true
		}) 
 }
  render() {
    return (
     <div id='navBar' className ='nav-bar-box'>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide nav-active">主页</div>
                <div className="swiper-slide">玄幻武侠</div>
                <div className="swiper-slide">都市言情</div>
                <div className="swiper-slide">恐怖悬疑</div>
                <div className="swiper-slide">娱乐综艺</div>
                <div className="swiper-slide">网游竞技</div>
                <div className="swiper-slide">军事历史</div>
                <div className="swiper-slide">刑侦推理</div>
                <div className="swiper-slide">职场商战</div>
                <div className="swiper-slide">百家讲坛</div>
            </div>
        </div>
     </div>
    );
  }
};


module.exports = NavBar;