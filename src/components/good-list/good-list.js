import React, { Component } from 'react';
import GoodListItem from '../good-list-item';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import { compose } from 'redux';
import { withStoreService } from '../hoc'
import './good-list.css';

class GoodList extends Component {

    componentDidMount () {
        const { storeService } = this.props;
        const data = storeService.getItems();
        console.log(data);
        this.props.goodLoaded(data)
    }

    render () {
        const { goods } = this.props;
        return (
            <ul>
                {goods.map((itemData) => {
                    return (
                       <li key={itemData.id}>
                         <GoodListItem itemData={itemData}/>
                       </li>     
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = ({goods}) => {
    return { goods }
}

// const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators(actions, dispatch)
// }

export default compose(
    withStoreService(),
    connect(mapStateToProps, actions)
)(GoodList);