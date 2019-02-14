import React from 'react';
import './jokeItem.css';

import { compose } from 'redux';
import { withStoreService } from '../hoc'
import { connect } from 'react-redux';
import * as actions from '../../actions';



const JokeItem = (props) => {
    const { joke, storeService, rndCategoryJoke } = props;

    const categoryClick = (e) => {
        const res = storeService.getCategoryRndJoke(joke)
                .then((data)=>rndCategoryJoke(data.value) )
    }
    return (
        <span
        onClick={categoryClick}
        >
        {joke}</span>
    )
}

export default compose (
    withStoreService(),
    connect(null, actions)
)(JokeItem);