import React, { Component } from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import { withStoreService } from '../hoc'
import './jokeCategories.css';
import JokeItem from '../JokeItem';

class JokeCategories extends Component {

    componentDidMount () {
        const {storeService, jokeCategories } = this.props;
        // eslint-disable-next-line
        const categories = storeService.getJokeCategories()
                .then((data) => jokeCategories(data))
    }

    render () {
        // eslint-disable-next-line
        const {categories, loading, activeCategory} = this.props;
        
        if (loading) {
            return <Loader/>
        }

        return (
            <ul>
                {
                    categories.map((cat, id) => {
                        return (
                            <li key={id}>
                                <JokeItem  category={cat}></JokeItem>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}
 
const mapStateToProps = ({categories, loading, activeCategory}) => {
    return {
        categories,
        loading,
        activeCategory 
    }
}

export default compose (
    withStoreService(),
    connect(mapStateToProps, actions)
)(JokeCategories)