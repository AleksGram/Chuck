import React from 'react';
import './jokeItem.css';

import { compose } from 'redux';
import { withStoreService } from '../hoc'
import { connect } from 'react-redux';
import * as actions from '../../actions';



const JokeItem = (props) => {
    const { category, storeService, rndCategoryJoke } = props;

    const categoryClick = (e) => {
        // eslint-disable-next-line
        const res = storeService.getCategoryRndJoke(category)
                .then((data)=>rndCategoryJoke(data, category) )
    }
    return (
        <span
        onClick={categoryClick}
        >
        {category}</span>
    )
}

export default compose (
    withStoreService(),
    connect(null, actions)
)(JokeItem);