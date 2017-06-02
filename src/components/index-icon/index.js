import './index.scss';
import React, {Component} from 'react';

class IndexIcon extends Component {
  constructor(){
    super()

  }
  render() {
    return (
     <div className= "indexImageBox">
          <div className="indexImage"></div>
      </div>
    );
  }
}

module.exports = IndexIcon;