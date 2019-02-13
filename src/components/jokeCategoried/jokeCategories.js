import React, { Component } from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import { withStoreService } from '../hoc'
import './jokeCategories.css';

class JokeCategories extends Component {

    componentDidMount () {
        const {storeService, jokeCategories } = this.props;
        const categories = storeService.getJokeCategories()
                .then((data) => jokeCategories(data))
    }

    render () {
        const {categories, loading} = this.props;
        
        if (loading) {
            return <Loader/>
        }

        return (
            <ul>
                {
                    categories.map((cat) => {
                        return <li>{cat}</li>
                    })
                }
            </ul>
        )
    }
}
 
const mapStateToProps = ({categories, loading}) => {
    return {
        categories,
        loading 
    }
}

export default compose (
    withStoreService(),
    connect(mapStateToProps, actions)
)(JokeCategories)