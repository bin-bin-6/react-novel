import './index.scss';
// swiper module
import '../../lib/swiper/swiper.min.css';
import Swiper from '../../lib/swiper/swiper.min';

import React, {Component} from 'react';
    

class Banner extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){

        new Swiper ('#banner .swiper-container', {
			pagination: '.swiper-pagination',
			paginationClickable: true,
			autoplay : 3000,
			autoplayDisableOnInteraction : false
		}) 
    }
    render(){
        return (
            <div id ='banner' className = 'banner-swiper-box'>
                <div className='swiper-container'>
                    <div className='swiper-wrapper'>
                        <div className='swiper-slide'>
                            <img className= 'img' src='http://m.ting56.com/css/motianji.jpg' alt='loading'/>
                        </div>
                        <div className='swiper-slide'>
                            <img className= 'img' src='http://m.ting56.com/css/daomu.jpg' alt='loading'/>
                        </div>
                        <div className='swiper-slide'>
                            <img className= 'img' src='http://m.ting56.com/css/dbws.jpg' alt='loading'/>
                        </div>
                    </div>
                    <div className='swiper-pagination'></div>
                </div>               
            </div>
        )
    }
}



module.exports = Banner;