import React from 'react';
import './navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {

    render() {
        return (
            <div>
                <Link to="/">
                    <ion-icon id="home-icon" name="home-outline"></ion-icon>
                </Link>
                <Link to='/leaderboard'>
                    <ion-icon id="trophy-icon" name="trophy-outline"></ion-icon>
                </Link>
            </div>
        );
    }
}

export default Navigation;
