import './index.scss';
import Banner from '../../components/banner';
import NavBar from '../../components/nav-bar';
import List from '../../components/list';

import React, { Component } from 'react';

class Home extends Component {
    constructor(props){
         super(props);
        //  console.log(this.props.params.id);
    }
    render(){
        return(
            <div className="home-container">
                <NavBar/>
                <div className ='home-content-box'>
                    <Banner/>
                </div>
                <List/>
            </div>
            )
    }

}
Home.propTypes = {
    params: React.PropTypes.object.isRequired
};
export default Home;