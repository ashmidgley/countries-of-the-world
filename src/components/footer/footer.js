import React from 'react';
import './footer.css';

class Footer extends React.Component {

    render() {
        return (
            <footer className="footer pt-4">
                <div className="container-fluid text-container text-md-left">
                    <div className="row">
                        <div className="col-md-8">
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">About</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                            <p>
                                Too long have we missed Geography questions on University Challenge.
                                Too long have we been duped by competitors from all corners of the British Isles.
                                It is time to stand in defiance of this tyranny, to trade in your UChal wooden spoon for the Paxman gold medal.
                                Today we train and tomorrow we smuggly list the islands of the Carribean.
                                Yes, my friend, they may take your History round, but they will never take your Geography.
                            </p>
                            <p>
                                Favicon made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h6 className="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h6>
                            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
                            <ul className="list-unstyled">
                                <li>
                                    <a href="https://countriesofthe.world">Home</a>     
                                </li>
                                <li>
                                    <a href="https://countriesofthe.world/leaderboard">Leaderboard</a>
                                </li>
                                <li>
                                    <a href="https://github.com/ashmidgley/countries-of-the-world#countries">Accepted Answers</a>
                                </li>
                                <li>
                                    <a href="https://github.com/ashmidgley/countries-of-the-world/issues">Raise Issue</a>
                                </li>
                                <li>
                                    <a href="https://github.com/ashmidgley/countries-of-the-world/blob/master/CONTRIBUTING.md">Contributing</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright text-center py-3">
                    © 2020 - <a href="https://github.com/ashmidgley">ashmidgley</a> 
                </div>
            </footer>
        );
    }
}

export default Footer;
