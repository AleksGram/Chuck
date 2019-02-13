import React, { Fragment } from 'react';
import './good-list-item.css';
import icon from './imp.jpg'

const GoodListItem = ({itemData}) => {
    const { id, name } = itemData
    return (
        <Fragment>
            <span>{id}</span>
            <span>{name}</span>
            <img src={icon} alt="icon"/>
        </Fragment>
    )
}

export default GoodListItem;