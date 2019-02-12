import React, { Component } from 'react';
import GoodListItem from '../good-list-item';
import Loader from '../loader'
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import { withStoreService } from '../hoc'
import './good-list.css';

class GoodList extends Component {

    componentDidMount () {
        const { storeService, goodLoaded  } = this.props;
        storeService.getItems()
            .then((data) =>  goodLoaded(data));
    }

    render () {
        const { goods, loading } = this.props;

        if (loading) {
            return <Loader/>
        }
        return (
            <ul className="list-group">
                {goods.map((itemData) => {
                    return (
                       <li className='list-group-item list-group-item-primary' key={itemData.id}>
                         <GoodListItem itemData={itemData}/>
                       </li>     
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = ({goods, loading}) => {
    return { goods, loading }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

export default compose(
    withStoreService(),
    connect(mapStateToProps, actions)
)(GoodList);