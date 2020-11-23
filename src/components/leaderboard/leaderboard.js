import React from 'react';
import './leaderboard.css';
import Helmet from 'react-helmet';
import Spinner from '../spinner/spinner';
import { getTimeString } from '../../helpers/time';

class Leaderboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            codes: null, 
            entries: null,
            page: 0,
            hasMore: false,
            loading: true
        };
    }

    componentDidMount() {
        this.getEntries(0);
        this.getCodes();
    }

    getEntries = (page) => {
        fetch(`${process.env.REACT_APP_API_URL}/leaderboard?page=${page}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    entries: data.entries,
                    hasMore: data.hasMore,
                    page: page
                });
            });
    }

    getCodes = () => {
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

    pageBack = () => {
        this.getEntries(this.state.page - 1);
    }

    pageForward = () => {
        this.getEntries(this.state.page + 1);
    }

    render() {
        if(this.state.loading) {
            return (
                <Spinner></Spinner>
            );
        }

        return(
            <div className="leaderboard-container">
                <Helmet>
                    <title>Countries of the World Map Quiz - Leaderboard</title>
                    <meta
                        name="description"
                        content="Check out the Countries of the World Map Quiz leaderboard to see how your score and time compares with others. Did you get all 197?"
                    />
                </Helmet>
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
                                {this.state.entries.map((entry, index) =>
                                    <tr key={entry.id}>
                                        <td>{this.state.page*10+index+1}</td>
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
                        <div className="float-right">
                            <button className="btn pager" onClick={this.pageBack} disabled={this.state.page === 0}>
                                <ion-icon name="caret-back-outline" ></ion-icon>
                            </button>
                            <button className="btn pager" onClick={this.pageForward} disabled={!this.state.hasMore}>
                                <ion-icon name="caret-forward-outline"></ion-icon>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Leaderboard;
