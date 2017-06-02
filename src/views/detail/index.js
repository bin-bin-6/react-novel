import './index.scss';
import DetailHeader from '../../components/detail-header';
import DetailIndex from '../../components/detail-index';
import DetailContent from '../../components/detail-content';
import DetailCatalog from '../../components/detail-catalog';

import React, { Component } from 'react';

class Detail extends Component {
    constructor(props){
         super(props);
    }
    render(){
        return(
            <div className="detail-container">
                <DetailHeader></DetailHeader>
                <DetailIndex></DetailIndex>
                <DetailContent></DetailContent>
                <DetailCatalog></DetailCatalog>
            </div>
            )
    }

}

export default Detail;