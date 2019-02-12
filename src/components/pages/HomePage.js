import React from 'react';
import GoodList from '../good-list';

const HomePage = () => {
    const goods =  [
        {id:1, name: 'Item1'},
        {id:2, name: 'Item2'},
        {id:3, name: 'Item3'},
    ];
    return (
        <GoodList goods={goods}/>
    )
}

export default HomePage;