import React from 'react';
import './home.css';
import 'react-svg-map/lib/index.css';
import $ from 'jquery';
import World from "@svg-maps/world";
import Spinner from '../spinner/spinner';
import Navigation from '../navigation/navigation';
import CompletedModal from '../completed-modal/completed-modal';
import SubmissionBox from '../submission-box/submission-box';
import Tooltip from '../tooltip/tooltip';
import { SVGMap } from "react-svg-map";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            countries: null,
            alternativeNamings: null,
            countriesMap: null, 
            submissions: [],
            started: false,
            timer: '15:00',
            modalIsOpen: false,
            submitting: false,
            alreadyDone: false,
            name: '',
            nameInvalid: false,
            country: '',
            countryInvalid: false,
            tooltipText: null,
            tooltipStyle: { "display": "none" },
            trophyStyle: {},
            loading: true
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_API_URL}/countries`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countries: data
                });
            });

        fetch(`${process.env.REACT_APP_API_URL}/countries/alternatives`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    alternativeNamings: data
                });
            });
        
        fetch(`${process.env.REACT_APP_API_URL}/countries/map`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    countriesMap: data
                });
            });
    }

    componentDidUpdate() {
        if(this.state.loading && this.state.countries
            && this.state.alternativeNamings && this.state.countriesMap) {
            this.setState({
                loading: false
            });
        }
    }

    startTimer = () => {
        this.setState({
            started: true
        });

        let self = this;
        var timer = 15 * 60;
        var minutes = 15;
        var seconds = 0;

        var countdown = setInterval(function () {
            if(self.state.finished)
                clearInterval(countdown)

            timer--;
            if (timer < 0) {
                self.finish();
                clearInterval(countdown);
            }

            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);
            minutes = minutes < 10 ? '0' + minutes : minutes;
            seconds = seconds < 10 ? '0' + seconds : seconds;

            self.setState({
                timer: `${minutes}:${seconds}`
            });
        }, 1000);
    }
  
    finish = () => {
        this.setState({
            finished: true,
            modalIsOpen: true
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            if(!this.state.submissions.includes(value))
                $(`[name="${value}"]`).css({ fill: "#f4bc44" });
        } 
    }

    retry = () => {
        this.setState({
            finished: false,
            submissions: [],
            timer: '15:00',
            name: '',
            country: '',
            nameInvalid: false,
            countryInvalid: false
        });

        for (const [key, value] of Object.entries(this.state.countriesMap)) {
            $(`[name="${value}"]`).css({ fill: "lightgrey" });
        } 

        this.startTimer(); 
    }

    handleSubmission = (event) => {
        var submission = event.target.value.toLowerCase().trim();
        if(!this.state.countries.includes(submission) &&
            !this.state.alternativeNamings.includes(submission))
            return;

        var name = this.state.countriesMap[submission];
        if(name && this.state.submissions.includes(name)) {
            this.flashAlreadyDone();
            return;
        }

        $(`[name="${name}"]`).css({ fill: "#a1d99b" });

        var update = this.state.submissions;
        update.push(name);
        this.setState({
            submissions: update 
        });

        event.target.value = "";
    }

    flashAlreadyDone = () => {
        this.setState({
            alreadyDone: true
        });

        let self = this;
        setTimeout(function() {
            self.setState({
                alreadyDone: false
            });
        }, 2000);
    }

    mouseOver = (event) => {
        if(!this.state.finished)
            return;

        this.setState({
            tooltipText: event.target.getAttribute('name')
        });
    }

    mouseMove = (event) => {
        if(!this.state.finished)
            return;

        var style = {
            "display": "block",
            "top": event.clientY + 10,
            "left": event.clientX - 100
        };

        this.setState({
            tooltipStyle: style
        });
    }

    mouseOut = (event) => {
        if(!this.state.finished)
            return;

        this.setState({
            tooltipText: null,
            tooltipStyle: { "display": "none" }
        });
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    handleCountryChange = (event) => {
        this.setState({
            country: event.target.value
        });
    }

    handleModalSubmit = (e) => {
        e.preventDefault();
        this.setState({
            submitting: true,
            nameInvalid: false,
            countryInvalid: false
        });

        if(this.state.name === '' || this.state.country === '') {
            var nameInvalid = this.state.name === '';
            var countryInvalid = this.state.country === '';

            this.setState({
                countryInvalid: countryInvalid,
                nameInvalid: nameInvalid,
                submitting: false
            });

            return;
        }

        var data = {
            name: this.state.name,
            country: this.state.country,
            countries: this.state.submissions.length,
            time: this.state.timer
        };

        fetch(`${process.env.REACT_APP_API_URL}/leaderboard`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(data => {
            this.setState({
                modalIsOpen: false,
                submitting: false,
                name: '',
                country: ''
            });

            let self = this;
            setTimeout(function() {
                self.setState({
                    trophyStyle: { "animation": "spin 1.5s" }
                });

                setTimeout(function() {
                    self.setState({
                        trophyStyle: {}
                    });
                }, 1500);
            }, 500);
        })
        .catch(error => {
            console.error(error);
        });

    }

    closeModal = (e) => {
        e.preventDefault();

        this.setState({
            modalIsOpen: false
        });
    }

    render() {
        if(this.state.loading) {
            return (
                <Spinner></Spinner>
            );
        }

        return (
            <div className="home-container">
                <Navigation trophyStyle={this.state.trophyStyle}></Navigation>
                <CompletedModal
                    modalIsOpen={this.state.modalIsOpen}
                    submissions={this.state.submissions.length}
                    countries={this.state.countriesMap}
                    time={this.state.timer}
                    submitting={this.state.submitting}
                    name={this.state.name}
                    nameInvalid={this.state.nameInvalid}
                    country={this.state.country}
                    countryInvalid={this.state.countryInvalid}
                    handleNameChange={this.handleNameChange}
                    handleCountryChange={this.handleCountryChange}
                    handleSubmit={this.handleModalSubmit}
                    closeModal={this.closeModal}>
                </CompletedModal>
                <SVGMap
                    map={World}
                    onLocationMouseOver={this.mouseOver}
                    onLocationMouseMove={this.mouseMove}
                    onLocationMouseOut={this.mouseOut}
                />
                <Tooltip
                    value={this.state.tooltipText}
                    style={this.state.tooltipStyle}>
                </Tooltip>
                <SubmissionBox
                    submissions={this.state.submissions}
                    countries={this.state.countries}
                    alreadyDone={this.state.alreadyDone}
                    started={this.state.started}
                    finished={this.state.finished}
                    timer={this.state.timer}
                    startTimer={this.startTimer}
                    handleSubmission={this.handleSubmission}
                    finish={this.finish}
                    retry={this.retry}>
                </SubmissionBox>
            </div>
        );
    }
}

export default Home;

