import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Leaderboard from './components/leaderboard/leaderboard';

function Routes() {
    return (
        <Switch>
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route component={Home} />
        </Switch>
    );
}

export default Routes;