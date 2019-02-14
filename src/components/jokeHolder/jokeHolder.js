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
        const {storeService, randomJoke, categoryJoke, currentJoke } = this.props;
        const currentjoke = storeService.getRandomJoke()
                .then((data) => randomJoke(data.value))
    }

    renderJoke (categoryJoke, currentJoke) {
        return (categoryJoke) ? categoryJoke : currentJoke;
    }

    render () {
        const {currentJoke, categoryJoke, loading} = this.props;
        if (loading) {
            return <Loader/>
        }

        return (
            <div>
                <span>{this.renderJoke(categoryJoke, currentJoke)}</span>
                <JokeCategories/>
            </div>
        ) 
    }
}
 
const mapStateToProps = ({currentJoke, goods, loading, categoryJoke}) => {
    return {
        currentJoke,
        goods,
        loading,
        categoryJoke 
    }
}

export default compose (
    withStoreService(),
    connect(mapStateToProps, actions)
)(JokeHolder)