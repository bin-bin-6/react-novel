import './index.scss';
import React, {Component} from 'react';

class TopBar extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
     <div className='top-bar-box'>
         <div className='left-box'>
             <div className='logo'></div>
         </div>
         <div className='right-box'>
             <div className = 'icon-box search-icon-box'>
                 <div className = 'icon search-icon'></div>
                 <div className = 'top-word'>
                     搜索
                 </div>
             </div>
             <div className ='icon-box login-icon-box'>
                 <div className = 'icon login-icon'></div>
                 <div className = 'top-word'>
                    登录
                 </div>
             </div>
         </div>
     </div>
    );
  }
};


module.exports = TopBar;