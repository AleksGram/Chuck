import React, { Component } from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';

import { withStoreService } from '../hoc'
import JokeCategories from '../jokeCategoried';
import './jokeHolder.css';

class JokeHolder extends Component {

    componentDidMount () {
        const {storeService, randomJoke } = this.props;
        const currentjoke = storeService.getRandomJoke()
                .then((data) => randomJoke(data.value))
    }

    render () {
        const {currentJoke, loading} = this.props;
        
        if (loading) {
            return <Loader/>
        }

        return (
            <div>
                <span>{currentJoke}</span>
                <JokeCategories/>
            </div>
        ) 
    }
}
 
const mapStateToProps = ({currentJoke, goods, loading}) => {
    return {
        currentJoke,
        goods,
        loading 
    }
}

export default compose (
    withStoreService(),
    connect(mapStateToProps, actions)
)(JokeHolder)