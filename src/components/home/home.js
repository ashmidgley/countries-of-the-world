import React from 'react';
import './home.css';
import 'react-svg-map/lib/index.css';
import $ from 'jquery';
import World from "@svg-maps/world";
import Spinner from '../spinner/spinner';
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
            dropdownOptions: null,
            submissions: [],
            started: false,
            stopWatch: 0,
            max: 15 * 60,
            clockString: "15:00",
            modalIsOpen: false,
            submitting: false,
            alreadyDone: false,
            name: '',
            nameInvalid: false,
            country: '',
            countryInvalid: false,
            tooltipText: null,
            tooltipStyle: { "display": "none" },
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
                var values = Array.from(Object.values(data));
                this.setState({
                    countriesMap: data,
                    dropdownOptions: [...new Set(values)]
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
        var countdown = setInterval(function () {
            if(self.state.finished) {
                clearInterval(countdown)
                return;
            }

            var temp = self.state.stopWatch + 1;
            var clockString = self.getClockString(temp);
            self.setState({
                stopWatch: temp,
                clockString: clockString
            });

            if (self.state.stopWatch >= self.state.max) {
                self.finish();
                clearInterval(countdown);
            }
        }, 1000);
    }

    getClockString = (expired) => {
        expired = this.state.max - expired;
        var minutes = Math.floor(expired / 60);
        var seconds = expired % 60;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        return `${minutes}:${seconds}`;
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
            stopWatch: 0,
            clockString: '15:00',
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
            time: this.state.stopWatch
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

            this.spinTrophy();
        })
        .catch(error => {
            console.error(error);
        });

    }

    spinTrophy = () => {
        setTimeout(function() {
            $("#trophy-icon").css("animation", "spin 1.5s")
            setTimeout(function() {
                $("#trophy-icon").css("animation", null)
            }, 1500);
        }, 500);
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
                <CompletedModal
                    modalIsOpen={this.state.modalIsOpen}
                    submissions={this.state.submissions.length}
                    countries={this.state.dropdownOptions}
                    stopWatch={this.state.stopWatch}
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
                    timer={this.state.clockString}
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

