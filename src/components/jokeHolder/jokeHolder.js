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
        // eslint-disable-next-line
        const {storeService, randomJoke, categoryJoke, currentJoke, jokeRequest } = this.props;
        jokeRequest();
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
        const {activeCategory, storeService, rndCategoryJoke, randomJoke, jokeRequest} = this.props;
        if (activeCategory) {
            jokeRequest();
            // eslint-disable-next-line
            const jokeData = storeService.getCategoryRndJoke(activeCategory)
                    .then((data)=>rndCategoryJoke(data, activeCategory));
        } else {
            jokeRequest();
            // eslint-disable-next-line
            const currentjoke = storeService.getRandomJoke()
            .then((data) => randomJoke(data.value))
        }
    }

    render () {
        // eslint-disable-next-line
       
        const {loading} = this.props;
        if (loading) {
            return (
                <div className='jokeContainer'>
                <p className="current-joke">
                     <Loader/>
                </p>
            </div>
            ) 
        }

        return (
            <div >
                <div className='jokeContainer'>
                    <p className="current-joke">
                        {this.renderJoke()}
                    </p>
                </div>
                <JokeCategories/>
                <div
                 className="btn btn-warning random"
                 onClick={()=>{this.randomBtnClick()}}
                 >Random joke</div>
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