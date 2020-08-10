import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './components/home/home';
import Leaderboard from './components/leaderboard/leaderboard';
import Footer from './components/footer/footer';

class App extends React.Component {

    render() {
        return(
            <div>
                <div id="app-container">
                    <Router>
                        <Switch>
                            <Route exact path="/leaderboard" component={Leaderboard} />
                            <Route component={Home} />
                        </Switch>
                    </Router>
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default App;
