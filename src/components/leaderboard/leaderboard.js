import React from 'react';
import './leaderboard.css';
import { Link } from 'react-router-dom';

class Leaderboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { id: 1, name: 'KEM', country: 'England', countries: 256, time: '14:20' },
                { id: 2, name: 'HSW', country: 'Uganda', countries: 136, time: '8:20' },
                { id: 3, name: 'AKM', country: 'New Zealand', countries: 5, time: '15:00' }
            ]
        };
    }

    render() {
        return(
            <div className="leaderboard-container">
                <Link to="/">
                    <ion-icon id="home-icon" name="home-outline"></ion-icon>
                </Link>
                <Link to='/leaderboard'>
                    <ion-icon id="trophy-icon" name="trophy-outline"></ion-icon>
                </Link>
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <h1>Leaderboard</h1>
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Country</th>
                                    <th>Countries</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.entries.map(entry =>
                                    <tr key={entry.id}>
                                        <td>{this.state.entries.indexOf(entry)+1}</td>
                                        <td>{entry.name}</td>
                                        <td>{entry.country}</td>
                                        <td>{entry.countries}</td>
                                        <td>{entry.time}</td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Leaderboard;
