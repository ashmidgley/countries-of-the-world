import React from 'react';
import './leaderboard.css';
import Spinner from '../spinner/spinner';
import { getTimeString } from '../../helpers/time';

class Leaderboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            codes: null, 
            entries: null,
            loading: true
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/leaderboard`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    entries: data
                });
            });

        fetch(`${process.env.REACT_APP_API_URL}/codes`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    codes: data
                });
            });
    }

    componentDidUpdate() {
        if(this.state.loading && this.state.entries && this.state.codes) {
            this.setState({
                loading: false
            });
        }
    }

    render() {
        if(this.state.loading) {
            return (
                <Spinner></Spinner>
            );
        }

        return(
            <div className="leaderboard-container">
                <div className="row justify-content-md-center">
                    <div className="col-md-6">
                        <div className="text-center">
                            <h1>Leaderboard</h1>
                        </div>
                        <table className="table table-hover">
                            <thead className="thead-dark">
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
                                        <td>
                                            <img id="flag" src={`/flags/${this.state.codes[entry.country]}.svg`} alt="Country flag"/>
                                        </td>
                                        <td>{entry.countries}</td>
                                        <td>{getTimeString(entry.time)}</td>
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
