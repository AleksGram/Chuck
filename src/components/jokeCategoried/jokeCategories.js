import React, { Component } from 'react';
import Loader from '../loader'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import { withStoreService } from '../hoc'
import './jokeCategories.css';
import JokeItem from '../JokeItem';

class JokeCategories extends Component {

    componentDidMount() {
        const { storeService, jokeCategories, dataProvider } = this.props;
        const socket = dataProvider.socket;
        console.log(this.props);
        // eslint-disable-next-line
        dataProvider.initSocket(socket);
        const categories = storeService.getJokeCategories()
            .then((data) => jokeCategories(data))
    }

    scroll = () => {
        const { activeCategory } = this.props;
       
        let last = null;
        if (activeCategory === '') {
            last = document.querySelector('li.category:nth-child(7)');
        
            if(last.getBoundingClientRect().top < 328) {
                last = last.nextElementSibling;
            }
        } else {
            last = document.querySelector(`li.category.${activeCategory}`);
        }

        last.scrollIntoView({block:'start', behaviour: 'smooth'})
    }

    sendMessage = (data) => {
        const { dataProvider } = this.props;
        const socket = dataProvider.socket;
        const request = {
            category: data,
            providerId: 25
        }
        socket.send(JSON.stringify(request));
    }

    render() {
        // eslint-disable-next-line
        const { categories, loading, activeCategory, dataProvider } = this.props;

        if (loading) {
            return <Loader />
        }

        
        return (
            <div className='categoryContainer' >
                <ul className="list-category">
                    {
                        categories.map((cat, id) => {
                            return (
                                <li key={id} className={(activeCategory === cat) ? `category ${cat} active` : `category ${cat}`}>
                                    <JokeItem category={cat}></JokeItem>
                                </li>
                            )
                        })
                    }
                </ul>
                <div onClick={()=>{this.sendMessage(activeCategory)}} className='more-btn'>More-></div>
            </div>
        )
    }
}

const mapStateToProps = ({ categories, loading, activeCategory }) => {
    return {
        categories,
        loading,
        activeCategory
    }
}

export default compose(
    withStoreService(),
    connect(mapStateToProps, actions)
)(JokeCategories)