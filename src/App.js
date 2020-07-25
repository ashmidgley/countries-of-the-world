import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Leaderboard from './components/leaderboard/leaderboard';

class App extends React.Component {

    render() {
        return(
            <Router>
                <Switch>
                    <Route exact path="/leaderboard" component={Leaderboard} />
                    <Route component={Home} />
                </Switch>
            </Router>
        );
    }
}

export default App;
