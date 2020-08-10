import React from 'react';
import './footer.css';

class Footer extends React.Component {

    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <p>
                        Icons made by <a href="https://www.flaticon.com/authors/turkkub" title="turkkub">turkkub</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
                    </p>
                    <a id="github-icon" href="https://github.com/ashmidgley/countries-of-the-world">
                        <ion-icon name="logo-github"></ion-icon>
                    </a>
                </div>
            </div>
        );
    }
}

export default Footer;
