import React, { Component } from 'react';
import GoodListItem from '../good-list-item';
import './good-list.css';

class GoodList extends Component {

    render () {
        const { goods } = this.props;
        return (
            <ul>
                {goods.map((itemData) => {
                    return (
                       <li key={itemData.id}>
                         <GoodListItem itemData={itemData}/>
                       </li>     
                    )
                })}
            </ul>
        )
    }
}

export default GoodList;