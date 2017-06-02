import './index.scss';
import React, {Component} from 'react';

class Author extends Component {
  constructor(props){
    super(props);

  }
  render() {
    return (
        <div className="authorBox">
            <ul className ="authorUl">
                <li className="authorLi">
                    <div className="authorTitle">name:</div>
                    <div className="info">puncheung_lai</div>
                </li>
                <li className="authorLi">
                    <div className="authorTitle">tel:</div>
                    <div className="info">+86 13726210959</div>
                </li>
            </ul>
        </div>
    );
  }
}

module.exports = Author;