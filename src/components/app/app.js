import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { HomePage } from '../pages/';
import './app.css';

const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}/>
        </Switch>
    );
};

export default App;
