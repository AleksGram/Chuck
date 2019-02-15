import React, { Component, Fragment } from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';

import { withStoreService } from '../hoc'
import JokeCategories from '../jokeCategoried';
import './jokeHolder.css';

class JokeHolder extends Component {

    componentDidMount () {
        // eslint-disable-next-line
        const {storeService, randomJoke, categoryJoke, currentJoke } = this.props;
        // eslint-disable-next-line
        const currentjoke = storeService.getRandomJoke()
                .then((data) => randomJoke(data.value))
    }

    renderJoke () {
        const {categoryJoke, currentJoke} = this.props
        return (categoryJoke) 
        ? (categoryJoke.value) : currentJoke;
    }

    randomBtnClick () {
        const {activeCategory, storeService, rndCategoryJoke, randomJoke} = this.props;
        if (activeCategory) {
            // eslint-disable-next-line
            const jokeData = storeService.getCategoryRndJoke(activeCategory)
                    .then((data)=>rndCategoryJoke(data, activeCategory));
        } else {
            // eslint-disable-next-line
            const currentjoke = storeService.getRandomJoke()
            .then((data) => randomJoke(data.value))
        }
    }

    render () {
        // eslint-disable-next-line
        const {loading} = this.props;
        if (loading) {
            return <Loader/>
        }

        return (
            <div >
                <p className="current-joke">{this.renderJoke()}</p>
                <JokeCategories/>
                <button
                 type="button" className="btn btn-warning random"
                 onClick={()=>{this.randomBtnClick()}}
                 >Random</button>
            </div>
        ) 
    }
}
 
const mapStateToProps = ({currentJoke, goods, loading, categoryJoke, activeCategory}) => {
    return {
        currentJoke,
        goods,
        loading,
        categoryJoke,
        activeCategory 
    }
}

export default compose (
    withStoreService(),
    connect(mapStateToProps, actions)
)(JokeHolder)